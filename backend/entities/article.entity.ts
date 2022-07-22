import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { ArticleFeature } from "./articlefeature.entity";
import { ArticlePrice } from "./articleprice.entity";
import { Photo } from "./photo.entity";
import { CartArticle } from "./cartarticle.entity";

@Index("uq_article_title", ["title"], { unique: true })
@Index("fk_article_category_id", ["categoryId"], {})
@Entity("article", { schema: "aplikacija" })
export class Article {
  @PrimaryGeneratedColumn({ type: "int", name: "article_id", unsigned: true })
  articleId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("varchar", { name: "title", unique: true, length: 128 })
  title: string;

  @Column("varchar", { name: "excerpt", length: 255 })
  excerpt: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("tinyint", {
    name: "is_active",
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number;

  @Column("tinyint", {
    name: "is_promoted",
    unsigned: true,
    default: () => "'0'",
  })
  isPromoted: number;

  @Column("int", { name: "category_id", unsigned: true })
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.articles, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Category;

  @OneToMany(() => ArticleFeature, (articleFeature) => articleFeature.article)
  articleFeatures: ArticleFeature[];

  @OneToMany(() => ArticlePrice, (articlePrice) => articlePrice.article)
  articlePrices: ArticlePrice[];

  @OneToMany(() => Photo, (photo) => photo.article)
  photos: Photo[];

  @OneToMany(() => CartArticle, (cartArticle) => cartArticle.article)
  cartArticles: CartArticle[];
}
