import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from 'entities/administrator.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({

    imports: [TypeOrmModule.forFeature([Administrator])],
    controllers: [AdminController],
    providers: [AdminService]

})
export class AdminModule {}
