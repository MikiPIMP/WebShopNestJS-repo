import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from 'entities/administrator.entity';
import { AddAdminDto } from 'src/dto/admin/add.admin.dto';
import { EditAdminDto } from 'src/dto/admin/edit.administrator.dto';
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

    findOne(id: number): Promise<Administrator>{
        return this.adminRepository.findOneBy({ administratorId: id })
    }

    add(data: AddAdminDto): Promise<Administrator>{
        let passwordHash = crypto.createHash('sha512');
        let passwordHashString = passwordHash.update(data.password).digest('hex');
        
        let newAdmin: Administrator = new Administrator();
        newAdmin.username = data.username;
        newAdmin.passwordHash = passwordHashString;

        return this.adminRepository.save(newAdmin)
    }

    async editById(id: number, data: EditAdminDto): Promise<Administrator>{
        let admin: Administrator = await this.adminRepository.findOneBy({ administratorId: id })
        let passwordHash = crypto.createHash('sha512');
        let passwordHashString = passwordHash.update(data.password).digest('hex');
        admin.passwordHash = passwordHashString;
        
        return this.adminRepository.save(admin)
    }

    async remove(id: number): Promise<void>{
        await this.adminRepository.delete({ administratorId: id })
    }

}
