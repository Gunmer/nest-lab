import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../data/repositories/user.repository';

@Injectable()
export class GetAllUsersUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  execute() {
    return this.userRepository.getAll();
  }

}
