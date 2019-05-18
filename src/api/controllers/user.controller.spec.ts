import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { GetAllUsersUseCase } from '../../domain/use-cases/get-all-users.use-case';
import { FindUserUseCase } from '../../domain/use-cases/find-user.use-case';
import { SaveUserUseCase } from '../../domain/use-cases/save-user.use-case';
import { RemoveUserUseCase } from '../../domain/use-cases/remove-user.use-case';

jest.mock('../../domain/use-cases/get-all-users.use-case');
jest.mock('../../domain/use-cases/find-user.use-case');
jest.mock('../../domain/use-cases/save-user.use-case');
jest.mock('../../domain/use-cases/remove-user.use-case');

describe('UserController', () => {
  let controller: UserController;

  let getAllUsers: GetAllUsersUseCase;
  let findUser: FindUserUseCase;
  let saveUser: SaveUserUseCase;
  let removeUser: RemoveUserUseCase;

  beforeEach(async () => {
    const providers: Provider[] = [
      UserController,
      GetAllUsersUseCase,
      FindUserUseCase,
      SaveUserUseCase,
      RemoveUserUseCase,
    ];
    const app = await Test.createTestingModule({ providers }).compile();

    controller = app.get<UserController>(UserController);

    getAllUsers = app.get<GetAllUsersUseCase>(GetAllUsersUseCase);
    findUser = app.get<FindUserUseCase>(FindUserUseCase);
    saveUser = app.get<SaveUserUseCase>(SaveUserUseCase);
    removeUser = app.get<RemoveUserUseCase>(RemoveUserUseCase);
  });

  it('method should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be execute getAllUser', async () => {
    await controller.getUsers();

    expect(getAllUsers.execute).toBeCalled();
  });

  it('should be execute findUser', async () => {
    await controller.getUser('id');

    expect(findUser.execute).toBeCalledWith('id');
  });

  it('should be execute saveUser', async () => {
    const user = { id: undefined, age: 1, name: 'User' };

    await controller.addUser(user);

    expect(saveUser.execute).toBeCalledWith(user);
  });

  it('should be execute deleteUser', async () => {
    await controller.deleteUser('id');

    expect(removeUser.execute).toBeCalledWith('id');
  });

});
