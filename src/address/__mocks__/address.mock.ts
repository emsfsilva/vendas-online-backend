import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';
import { cityMock } from '../../city/__mocks__/city.mock';

export const addressMock: AddressEntity = {
  cep: 'fkjhgvk',
  cityId: cityMock.id,
  complement: 'sdfsdf',
  created_at: new Date(),
  id: 3216,
  numberAddress: 654,
  updated_at: new Date(),
  userId: userEntityMock.id,
};
