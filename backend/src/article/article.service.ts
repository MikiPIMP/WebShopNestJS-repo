import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Article } from 'entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService extends TypeOrmCrudService<Article> {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ){
        super(articleRepository)
    }

}
