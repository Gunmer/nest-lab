import { UserRepository } from '../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoveUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  async execute(userId: string) {
    return await this.userRepository.delete(userId);
  }

}
