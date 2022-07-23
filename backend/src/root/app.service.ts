import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  printajNekuGlupost(arg1: string): string {
    return arg1 + "!!!!!!!!!!";
  }
}
