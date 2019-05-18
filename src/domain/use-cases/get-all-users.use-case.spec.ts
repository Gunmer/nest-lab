import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserRepository } from '../../data/repositories/user.repository';
import { GetAllUsersUseCase } from './get-all-users.use-case';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user';

jest.mock('../../data/repositories/user.repository');

describe('GetAllUsersUseCase', () => {
  let useCase: GetAllUsersUseCase;

  let userRepository: UserRepository;

  beforeEach(async () => {
    const providers: Provider[] = [
      GetAllUsersUseCase,
      {
        provide: getRepositoryToken(User),
        useClass: UserRepository,
      },
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    useCase = app.get<GetAllUsersUseCase>(GetAllUsersUseCase);

    userRepository = app.get<UserRepository>(UserRepository);
  });

  it('method should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should call getAll', async () => {
    await useCase.execute();

    expect(userRepository.find).toBeCalled();
  });

});
