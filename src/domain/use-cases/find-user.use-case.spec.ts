import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserRepository } from '../../data/repositories/user.repository';
import { FindUserUseCase } from './find-user.use-case';

jest.mock('../../data/repositories/user.repository');

describe('FindUserUseCase', () => {
  let useCase: FindUserUseCase;

  let userRepository: UserRepository;

  beforeEach(async () => {
    const providers: Provider[] = [
      FindUserUseCase,
      UserRepository,
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    useCase = app.get<FindUserUseCase>(FindUserUseCase);

    userRepository = app.get<UserRepository>(UserRepository);
  });

  it('method should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should call findOne', async () => {
    await useCase.execute('id');

    expect(userRepository.findOne).toBeCalled();
  });

});
