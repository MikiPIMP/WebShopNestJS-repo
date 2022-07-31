import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Article } from 'entities/article.entity';
import { ArticleService } from './article.service';

@Controller('article')
@Crud({
    model: {
        type: Article
    },
    params: {
        id: {
            field: 'articleId',
            type: 'number',
            primary: true
        }
    },
    query: {
        join: {
            photos: {
                eager: true
            },
            articlePrices: {
                eager: true
            },
            articleFeatures: {
                eager: true
            },
            features: {
                eager: true
            }
        }
    }
})
export class ArticleController {
    constructor(private service: ArticleService){}
}
 