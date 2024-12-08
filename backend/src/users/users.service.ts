import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from './users.types';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === name);
  }

  signUp(name: string, password: string) {
    const isMatchUser = this.users.find((user) => user.name === name);
    // 既に入力されたユーザーが登録されている場合はエラーを返す。
    if (isMatchUser) {
      throw new Error('Miss');
    }
    const newPassword = bcrypt.hashSync(password, saltRounds);
    this.users.push({ id: uuid(), name, password: newPassword });
  }
}
