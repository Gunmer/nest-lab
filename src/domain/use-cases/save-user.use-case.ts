import { User } from '../model/user';
import { UserRepository } from '../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaveUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  execute(user: User) {
    this.userRepository.save(user);
  }
}
