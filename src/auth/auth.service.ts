import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(loginDto: LoginDto): Promise<UserEntity> {
    //Busca o usuario. Se não existir, então trás undefined
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    //Verificando se o email existe e se a senha é valida
    const isMatch = await compare(loginDto.password, user?.password || '');
    if (!user || !isMatch) {
      throw new NotFoundException('Email or Password invalid');
    }
    return user;
  }
}
