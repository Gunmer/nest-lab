import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './type-orm.config';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
