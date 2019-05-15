import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserRepository } from '../../data/repositories/user.repository';
import { SaveUserUseCase } from './save-user.use-case';

jest.mock('../../data/repositories/user.repository');

describe('SaveUserUseCase', () => {
  let useCase: SaveUserUseCase;

  let userRepository: UserRepository;

  beforeEach(async () => {
    const providers: Provider[] = [
      SaveUserUseCase,
      UserRepository,
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    useCase = app.get<SaveUserUseCase>(SaveUserUseCase);

    userRepository = app.get<UserRepository>(UserRepository);
  });

  it('method should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should call save', async () => {
    const user = { id: undefined, age: 1, name: '' };

    await useCase.execute(user);

    expect(userRepository.save).toBeCalledWith(user);
  });

});
