import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Products } from 'entities/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private ProductsService: ProductsService){}

    @Get()
    getAll(@Body() CreateProductDto: CreateProductDto): Promise<Products[]>{
        return this.ProductsService.findAll()
    }

    @Get(':id')
    getById(@Param('id')id: number): Promise<Products>{
        return this.ProductsService.findOne(id)
    }

}
