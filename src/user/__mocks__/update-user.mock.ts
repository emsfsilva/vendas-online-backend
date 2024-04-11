import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: 'abc',
  newPassword: 'qualquercoisa',
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
  lastPassword: 'tudoerrado',
  newPassword: 'tudoerrado',
};
