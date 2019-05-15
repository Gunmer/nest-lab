import { UserRepository } from '../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoveUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  execute(userId: number) {
    return this.userRepository.removeById(userId);
  }

}
