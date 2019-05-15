import { Module, Provider } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

const REPOSITORIES: Provider[] = [];

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [
    ...REPOSITORIES,
  ],
  exports: [
    ...REPOSITORIES,
  ],
})
export class DataModule {
}
