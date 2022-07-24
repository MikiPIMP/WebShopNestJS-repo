import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
}
bootstrap();

//-----------------------------------------
//Milan: [03.07.2022. u 17h]
//npm run start:dev
//aplikacija radi kod mene lokalhostu na portu 9000
//localhost:9000
//Aplikacija se iskljucuje sa komandom na tastaturi: ctrl+c
//                                                   y+enter
//-----------------------------------------
