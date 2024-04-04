import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '321654987',
  created_at: new Date(),
  email: 'emailmock@email.com',
  id: 43242,
  name: 'nameMock',
  password: 'largePassword',
  phone: '321654987',
  typeUser: UserType.User,
  updated_at: new Date(),
};
