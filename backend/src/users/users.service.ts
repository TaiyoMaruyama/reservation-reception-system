import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'demo',
      password: 'demo_pass',
    },
  ];

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === name);
  }
}
