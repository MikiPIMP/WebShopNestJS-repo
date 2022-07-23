import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./article.entity";

@Index("fk_article_price_article_id", ["articleId"], {})
@Entity("article_price", { schema: "aplikacija" })
export class ArticlePrice {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "article_price_id",
    unsigned: true,
  })
  articlePriceId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("decimal", { name: "price", unsigned: true, precision: 10, scale: 2 })
  price: string;

  @Column("int", { name: "article_id", unsigned: true })
  articleId: number;

  @ManyToOne(() => Article, (article) => article.articlePrices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;
}
