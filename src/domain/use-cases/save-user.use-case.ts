import { UserEntity } from '../model/user.entity';
import { UserRepository } from '../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaveUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  async execute(user: UserEntity) {
    await this.userRepository.save(user);
  }
}
