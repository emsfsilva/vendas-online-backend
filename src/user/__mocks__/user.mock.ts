import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '321654987',
  created_at: new Date(),
  email: 'emailmock@email.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$Qo12id3XEf4gi0N1Q/0CnuQ6GLRt9oURdEcQrqB1gckWthO.H2lC.',
  phone: '321654987',
  typeUser: UserType.User,
  updated_at: new Date(),
};
