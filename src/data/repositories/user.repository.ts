import { Injectable } from '@nestjs/common';
import { User } from '../../domain/model/user';

@Injectable()
export class UserRepository {
  users: [User] = [{ id: 1, name: 'Cristiam' }];

  getAll() {
    return this.users;
  }

  findById(userId: number) {
    return this.users.find(user => user.id === userId);
  }

  save(user: User) {
    this.users.push(user);
  }

  removeById(userId: number) {
    const index = this.users.findIndex(user => user.id === userId);
    this.users.splice(index, 1);
  }

}
