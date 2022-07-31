import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from 'entities/administrator.entity';
import { AddAdminDto } from 'src/dto/admin/add.admin.dto';
import { EditAdminDto } from 'src/dto/admin/edit.administrator.dto';
import { ApiResponse } from 'src/misc/api.response.class';
const crypto = require('crypto')
import { Repository } from 'typeorm';


@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Administrator)
        private adminRepository: Repository<Administrator>
    ){}

    findAll(): Promise<Administrator[]>{
        return this.adminRepository.find();
    }

    async findOne(id: number): Promise<Administrator | ApiResponse>{
        const admin: Administrator = await this.adminRepository.findOneBy({ administratorId: id })
        if(admin === null){
            const response: ApiResponse = new ApiResponse("error", -1001, "Admin does not exist");
            return response
        }else{
            return admin
        }
    }

    add(data: AddAdminDto): Promise<Administrator | ApiResponse>{
        let passwordHash = crypto.createHash('sha512');
        let passwordHashString = passwordHash.update(data.password).digest('hex');
        
        let newAdmin: Administrator = new Administrator();
        newAdmin.username = data.username;
        newAdmin.passwordHash = passwordHashString;

        return new Promise(resolve => {

            this.adminRepository.save(newAdmin)
            .then(data => resolve(data))
            .catch(error => {
                const response: ApiResponse = new ApiResponse("error", -1002, "Admin with that username already exists");
                resolve(response);
            })
        });
    }

    async editById(id: number, data: EditAdminDto): Promise<Administrator | ApiResponse>{
        let admin: Administrator = await this.adminRepository.findOneBy({ administratorId: id })

        if(admin === null){
            const response: ApiResponse = new ApiResponse("error", -1003, "Admin does not exist");
            return response
        }else{
            let passwordHash = crypto.createHash('sha512');
            let passwordHashString = passwordHash.update(data.password).digest('hex');
            admin.passwordHash = passwordHashString;
            
            return this.adminRepository.save(admin)
        }


    }

    async remove(id: number): Promise<Administrator | ApiResponse>{
        let admin: Administrator = await this.adminRepository.findOneBy({ administratorId: id })

        if(admin === null){
            const response: ApiResponse = new ApiResponse("error", -1004, "Admin does not exist");
            return response
        }else{
            admin.isActive = 0
            return this.adminRepository.save(admin)
        }
    }

}
