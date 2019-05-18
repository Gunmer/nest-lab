import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      logging: true,
      loggerLevel: 'error',
      synchronize: true,
      entities: [__dirname + '/**/entities/*{.ts,.js}'],
      useNewUrlParser: true,
    };
  }

}
