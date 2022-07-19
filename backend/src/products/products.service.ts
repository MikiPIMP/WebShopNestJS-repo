import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'entities/products.entity';
import { ConnectionOptionsReader, Repository } from 'typeorm';
import { Product } from './inetrfaces/products.inetrface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private productsRepository: Repository<Products>
    ){}

    findAll(): Promise<Products[]>{
        return this.productsRepository.find()
    }

    findOne(id: number): Promise<Products>{
        return this.productsRepository.findOneBy({ id: id })
    }

    //insert(product: Product){}

}
