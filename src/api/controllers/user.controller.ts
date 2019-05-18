import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GetAllUsersUseCase } from '../../domain/use-cases/get-all-users.use-case';
import { FindUserUseCase } from '../../domain/use-cases/find-user.use-case';
import { SaveUserUseCase } from '../../domain/use-cases/save-user.use-case';
import { RemoveUserUseCase } from '../../domain/use-cases/remove-user.use-case';
import { User } from '../../domain/entities/user';

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
  async getUsers() {
    return await this.getAllUsers.execute();
  }

  @Get('/:userId')
  async getUser(@Param('userId') userId: string) {
    return await this.findUser.execute(userId);
  }

  @Post()
  async addUser(@Body() user: User) {
    await this.saveUser.execute(user);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    await this.removeUser.execute(userId);
  }

}
