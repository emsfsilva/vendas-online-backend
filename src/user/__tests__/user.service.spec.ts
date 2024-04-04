import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userEntityMock } from '../__mocks__/user.mock';
import { createUserMock } from '../__mocks__/createUser.mock';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(userEntityMock),
            save: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  //--------------TEST EMAIL----------------------------------------------------------------------

  //teste para saber se o findUserByEmail esta retornando email
  it('should return user in findUserByEmail', async () => {
    const user = await service.findUserByEmail(userEntityMock.email);
    expect(user).toEqual(userEntityMock);
  });

  //teste de ERRO para saber se o findUserByEmail esta retorna vazio
  it('should return user in findUserByEmail', async () => {
    jest.spyOn(userRepository, 'findOne').mockReturnValue(undefined);
    expect(
      service.findUserByEmail(userEntityMock.email),
    ).rejects.toThrowError();
  });

  //teste de ERRO para saber se o findUserByEmail esta retorna vazio
  it('should return user in findUserByEmail (erro DB)', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(
      service.findUserByEmail(userEntityMock.email),
    ).rejects.toThrowError();
  });

  //--------------TEST ID----------------------------------------------------------------------

  //teste para saber se o findUserById esta retornando ID
  it('should return user in findUserById', async () => {
    const user = await service.findUserById(userEntityMock.id);
    expect(user).toEqual(userEntityMock);
  });

  //teste de ERRO para saber se o findUserById esta retorna vazio
  it('should return user in findUserById', async () => {
    jest.spyOn(userRepository, 'findOne').mockReturnValue(undefined);
    expect(service.findUserById(userEntityMock.id)).rejects.toThrowError();
  });

  //teste de ERRO para saber se o findUserById esta retorna vazio
  it('should return user in findUserById (erro DB)', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(service.findUserById(userEntityMock.id)).rejects.toThrowError();
  });

  //--------------TEST RELAÇÃO DO ID----------------------------------------------------------------------

  //teste para saber se o getUserByIdUsingRelations esta retornando ID
  it('should return user in getUserByIdUsingRelations', async () => {
    const user = await service.getUserByIdUsingRelations(userEntityMock.id);
    expect(user).toEqual(userEntityMock);
  });

  //--------------TEST O CREATE USER----------------------------------------------------------------------

  //teste para saber se o CREATE esta inserindo no bd
  it('should return error is user exists', async () => {
    expect(service.createUser(createUserMock)).rejects.toThrowError();
  });

  //teste para  saber se o usuario não existe
  it('should return user if user not exists', async () => {
    jest.spyOn(userRepository, 'findOne').mockReturnValue(undefined);
    const user = await service.createUser(createUserMock);
    expect(user).toEqual(userEntityMock);
  });
});
