import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  private readonly user = [];

  demo(): string {
    return 'demo_message';
  }
}
