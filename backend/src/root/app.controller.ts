import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/') // radi na: localhost:3000/
  funk1(): string {
    return this.appService.printajNekuGlupost("Bilo koji string, bitno da sve radi (root putanja)");
  }

  @Get('/funkcija2') // radi na: localhost:3000/funkcija2
  funk2(): string {
    return this.appService.printajNekuGlupost("Bilo koji string, bitno da sve radi (druga putanja)");
  }

  @Get('/funkcija3') // radi na: localhost:3000/funkcija3
  funk3(): string {
    return this.appService.printajNekuGlupost("Bilo koji string, bitno da sve radi (treca putanja)");
  }
}
