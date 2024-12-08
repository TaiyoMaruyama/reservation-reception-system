import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    // 本来はトークンはこのように返却しない
    return this.authService.signIn(signInDto.name, signInDto.password);
  }

  @HttpCode(201)
  @Post('signup')
  signUp(@Body() signUpDto: Record<string, any>) {
    return this.authService.signUp(signUpDto.name, signUpDto.password);
  }
}
