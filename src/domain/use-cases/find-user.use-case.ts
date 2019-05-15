import { UserRepository } from '../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  execute(userId: number) {
    return this.userRepository.findById(userId);
  }
}
