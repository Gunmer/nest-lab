import { User } from '../entities/user';
import { UserRepository } from '../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaveUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  async execute(user: User) {
    await this.userRepository.save(user);
  }
}
