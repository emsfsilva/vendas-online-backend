import { userEntityMock } from '../../user/__mocks__/user.mock';
import { CartEntity } from '../entities/cart.entity';

export const cartMock: CartEntity = {
  active: true,
  created_at: new Date(),
  id: 6452,
  updated_at: new Date(),
  userId: userEntityMock.id,
};
