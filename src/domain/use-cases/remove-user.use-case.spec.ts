import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserRepository } from '../../data/repositories/user.repository';
import { RemoveUserUseCase } from './remove-user.use-case';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user';

jest.mock('../../data/repositories/user.repository');

describe('RemoveUserUseCase', () => {
  let useCase: RemoveUserUseCase;

  let userRepository: UserRepository;

  beforeEach(async () => {
    const providers: Provider[] = [
      RemoveUserUseCase,
      {
        provide: getRepositoryToken(User),
        useClass: UserRepository,
      },
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    useCase = app.get<RemoveUserUseCase>(RemoveUserUseCase);

    userRepository = app.get<UserRepository>(UserRepository);
  });

  it('method should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should call delete', async () => {
    await useCase.execute('id');

    expect(userRepository.delete).toBeCalled();
  });

});
