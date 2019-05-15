import { UserRepository } from './user.repository';
import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(async () => {
    const providers: Provider[] = [
      UserRepository,
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    repository = app.get<UserRepository>(UserRepository);
  });

  it('method should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should return one user', () => {
    const users = repository.getAll();
    expect(users.length).toBe(1);
  });

  it('should find user with id 1', () => {
    const user = repository.findById(1);
    expect(user.name).toBe('Cristiam');
  });

  it('should save user', () => {
    repository.save({id: 1, name: 'Mika'});
    expect(repository.getAll().length).toBe(2);
  });

  it('should remove user', () => {
    repository.removeById(1);
    expect(repository.getAll().length).toBe(0);
  });

});
