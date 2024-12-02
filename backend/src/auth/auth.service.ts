import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SingInReturn } from './auth.types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(name: string, password: string): SingInReturn {
    const user = await this.userService.findOne(name);
    if (!bcrypt.compare(password, user?.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  signUp(name: string, password: string) {
    try {
      this.userService.signUp(name, password);
      return `created`;
    } catch (error) {
      return error.message;
    }
  }
}
