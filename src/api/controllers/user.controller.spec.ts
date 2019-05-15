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

  it('should be execute getAllUser', () => {
    controller.getUsers();

    expect(getAllUsers.execute).toBeCalled();
  });

  it('should be execute findUser', () => {
    controller.getUser(1);

    expect(findUser.execute).toBeCalledWith(1);
  });

  it('should be execute saveUser', () => {
    const user = { id: 1, name: 'User' };

    controller.addUser(user);

    expect(saveUser.execute).toBeCalledWith(user);
  });

  it('should be execute deleteUser', () => {
    controller.deleteUser(1);

    expect(removeUser.execute).toBeCalledWith(1);
  });

});
