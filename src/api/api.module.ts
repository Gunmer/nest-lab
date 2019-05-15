import { Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    DomainModule,
  ],
  controllers: [UserController],
  providers: [],
})
export class ApiModule {
}
