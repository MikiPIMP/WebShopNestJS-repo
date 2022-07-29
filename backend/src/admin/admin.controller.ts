import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Administrator } from 'entities/administrator.entity';
import { AddAdminDto } from 'src/dto/admin/add.admin.dto';
import { EditAdminDto } from 'src/dto/admin/edit.administrator.dto';
import { ApiResponse } from 'src/misc/api.response.class';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(
        private AdminService: AdminService
    ){}

    @Get()
    getAll(): Promise<Administrator[]>{
        return this.AdminService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<Administrator | ApiResponse>{
        return this.AdminService.findOne(id)
    }

    @Post()
    create(@Body() data: AddAdminDto): Promise<Administrator | ApiResponse>{
        return this.AdminService.add(data)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: EditAdminDto): Promise<Administrator | ApiResponse>{
        return this.AdminService.editById(id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<Administrator | ApiResponse>{
        return this.AdminService.remove(id)
    }

}
