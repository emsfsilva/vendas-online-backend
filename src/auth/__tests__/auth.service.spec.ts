import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../user/user.service';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';
import { jwtMock } from '../__mocks__/jwt.mock';
import { loginUserMock } from '../__mocks__/login-user.mock';
import { ReturnUserDto } from '../../user/dtos/returnUser.dto';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findUserByEmail: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: () => jwtMock,
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
  });

  //------------VALIDANDO EMAIL E SENHA--------------------------

  it('should return user if password e email valid', async () => {
    const user = await service.login(loginUserMock);

    expect(user).toEqual({
      accessToken: jwtMock,
      user: new ReturnUserDto(userEntityMock),
    });
  });

  //------------VALIDANDO A SENHA--------------------------
  it('should return user if password invalid e email valid', async () => {
    expect(
      service.login({ ...loginUserMock, password: '2154' }),
    ).rejects.toThrowError();
  });

  //------------VALIDANDO O EMAIL--------------------------
  //Quando o email não existir
  it('should return user if email not exists', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockResolvedValue(undefined);
    expect(service.login(loginUserMock)).rejects.toThrowError();
  });
  //Testando a esceção
  it('should return error in UseService', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockRejectedValue(new Error());
    expect(service.login(loginUserMock)).rejects.toThrowError();
  });
});
