import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserRepository } from '../../data/repositories/user.repository';
import { RemoveUserUseCase } from './remove-user.use-case';

jest.mock('../../data/repositories/user.repository');

describe('RemoveUserUseCase', () => {
  let useCase: RemoveUserUseCase;

  let userRepository: UserRepository;

  beforeEach(async () => {
    const providers: Provider[] = [
      RemoveUserUseCase,
      UserRepository,
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    useCase = app.get<RemoveUserUseCase>(RemoveUserUseCase);

    userRepository = app.get<UserRepository>(UserRepository);
  });

  it('method should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should call removeById', () => {
    useCase.execute(1);

    expect(userRepository.removeById).toBeCalledWith(1);
  });

});
