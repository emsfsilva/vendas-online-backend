import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategory } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  //Metodo para buscar todas no bando (ultima camada)
  async findAllCategories(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find();
    // se não existir ou se for iguala 0 então retorna um erro
    if (!categories || categories.length === 0) {
      throw new NotFoundException('Categories empty');
    }
    return categories;
  }

  async findCategoryByName(name: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: {
        name,
      },
    });
    if (!category) {
      throw new NotFoundException(`Category name ${name} not found`);
    }

    return category;
  }

  //Metodo para salvar no bando
  async createCategory(
    createCategory: CreateCategory,
  ): Promise<CategoryEntity> {
    const category = await this.findCategoryByName(createCategory.name).catch(
      () => undefined,
    );

    if (category) {
      throw new BadRequestException(
        `Category name ${createCategory.name} exist`,
      );
    }
    return this.categoryRepository.save(createCategory);
  }
}
