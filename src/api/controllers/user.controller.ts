import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GetAllUsersUseCase } from '../../domain/use-cases/get-all-users.use-case';
import { FindUserUseCase } from '../../domain/use-cases/find-user.use-case';
import { SaveUserUseCase } from '../../domain/use-cases/save-user.use-case';
import { RemoveUserUseCase } from '../../domain/use-cases/remove-user.use-case';
import { User } from '../../domain/model/user';

@Controller('/user')
export class UserController {

  constructor(
    private readonly getAllUsers: GetAllUsersUseCase,
    private readonly findUser: FindUserUseCase,
    private readonly saveUser: SaveUserUseCase,
    private readonly removeUser: RemoveUserUseCase,
  ) {
  }

  @Get()
  getUsers() {
    return this.getAllUsers.execute();
  }

  @Get('/:userId')
  getUser(@Param('userId') userId: number) {
    return this.findUser.execute(userId);
  }

  @Post()
  addUser(@Body() user: User) {
    this.saveUser.execute(user);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId') userId: number) {
    this.removeUser.execute(userId);
  }

}
