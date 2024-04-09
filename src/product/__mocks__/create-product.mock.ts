import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDTO } from '../dtos/create-product.dto';

export const createProduct: CreateProductDTO = {
  categoryId: categoryMock.id,
  image: 'khvglkhv',
  name: 'name Mock product',
  price: 25.0,
};
