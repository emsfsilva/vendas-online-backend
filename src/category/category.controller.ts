import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ReturnCategory } from './dtos/return-category.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategory } from './dtos/create-category.dto';

@Roles(UserType.Admin, UserType.User)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //Metodo que retorna a lista das categorias vindo do categoryService
  @Get()
  async findAllCategories(): Promise<ReturnCategory[]> {
    return (await this.categoryService.findAllCategories()).map(
      (category) => new ReturnCategory(category),
    );
  }

  //Metodo que retorna a criação da categoria vindo do categoryService
  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createCategory(
    @Body() createCategory: CreateCategory,
  ): Promise<CategoryEntity> {
    return this.categoryService.createCategory(createCategory);
  }
}
