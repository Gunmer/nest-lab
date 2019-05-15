import { Module, Provider } from '@nestjs/common';
import { DataModule } from '../data/data.module';
import { GetAllUsersUseCase } from './use-cases/get-all-users.use-case';
import { FindUserUseCase } from './use-cases/find-user.use-case';
import { SaveUserUseCase } from './use-cases/save-user.use-case';
import { RemoveUserUseCase } from './use-cases/remove-user.use-case';

const USE_CASES: Provider[] = [
  GetAllUsersUseCase,
  FindUserUseCase,
  SaveUserUseCase,
  RemoveUserUseCase,
];

@Module({
  imports: [DataModule],
  providers: [
    ...USE_CASES,
  ],
  exports: [
    ...USE_CASES,
  ],
})
export class DomainModule {
}
