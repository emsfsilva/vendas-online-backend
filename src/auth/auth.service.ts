import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from '../user/user.service';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { ReturnUserDto } from '../user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayLoad.dto';
import { JwtService } from '@nestjs/jwt';
import { validatePassword } from 'src/utils/password';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLogin> {
    //Busca o usuario. Se não existir, então trás undefined
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    //Verificando se o email existe e se a senha é valida
    const isMatch = await validatePassword(
      loginDto.password,
      user?.password || '',
    );
    if (!user || !isMatch) {
      throw new NotFoundException('Email or Password invalid');
    }
    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
