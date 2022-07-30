import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Category } from 'entities/category.entity';
import { CategoryService } from './category.service';

@Controller('category')
@Crud({
    model: {
        type: Category
    },
    params: {
        id: {
            field: 'categoryId',
            type: 'number',
            primary: true
    }
    },
    query: {
        join: {
            categories: {
                eager: true
            }
        }
    }
})
export class CategoryController {
    constructor(private service: CategoryService){}
}
