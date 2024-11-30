import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from './user.types';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === name);
  }

  signUp(name: string, password: string) {
    const isMatchUser = this.users.find((user) => user.name === name);
    if (isMatchUser) {
      throw new Error('Miss');
    }
    this.users.push({ id: uuid(), name, password });
  }
}
