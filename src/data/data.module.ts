import { Module, Provider } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

const REPOSITORIES: Provider[] = [
  UserRepository,
];

@Module({
  providers: [
    ...REPOSITORIES,
  ],
  exports: [
    ...REPOSITORIES,
  ],
})
export class DataModule {
}
