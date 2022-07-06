import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatebaseConfiguration } from 'config/datebase.configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatebaseConfiguration.hostname,
      port: 3306,
      username: DatebaseConfiguration.username,
      password: DatebaseConfiguration.password,
      database: DatebaseConfiguration.database,
      entities: []  //Milan: PL: #039 sve do 20min 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
