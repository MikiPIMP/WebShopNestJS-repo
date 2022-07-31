import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { Administrator } from 'entities/administrator.entity';
import { ArticleFeature } from 'entities/article-feature.entity';
import { ArticlePrice } from 'entities/article-price.entity';
import { Article } from 'entities/article.entity';
import { CartArticle } from 'entities/cart-article.entity';
import { Cart } from 'entities/cart.entity';
import { CategoryModule } from 'src/category/category.module';
import { Category } from 'entities/category.entity';
import { Feature } from 'entities/feature.entity';
import { Order } from 'entities/order.entity';
import { Photo } from 'entities/photo.entity';
import { User } from 'entities/user.entity';
import { AdminModule } from 'src/admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from 'src/article/article.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [
        Administrator,
        ArticleFeature,
        ArticlePrice,
        Article,
        CartArticle,
        Cart,
        Category,
        Feature,
        Order,
        Photo,
        User
      ],
      synchronize: false,  //Milan: PL: #039 sve do 20min
      autoLoadEntities: true
    }),
    AdminModule,
    CategoryModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
