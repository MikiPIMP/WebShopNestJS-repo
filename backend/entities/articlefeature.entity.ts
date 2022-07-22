import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./article.entity";
import { Feature } from "./feature.entity";

@Index("uq_article_feature_article_id_feature_id", ["articleId", "featureId"], {
  unique: true,
})
@Index("fk_article_feature_feature_id", ["featureId"], {})
@Entity("article_feature", { schema: "aplikacija" })
export class ArticleFeature {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "article_feature_id",
    unsigned: true,
  })
  articleFeatureId: number;

  @Column("varchar", { name: "value", nullable: true, length: 64 })
  value: string | null;

  @Column("int", { name: "article_id", unsigned: true })
  articleId: number;

  @Column("int", { name: "feature_id", unsigned: true })
  featureId: number;

  @ManyToOne(() => Article, (article) => article.articleFeatures, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;

  @ManyToOne(() => Feature, (feature) => feature.articleFeatures, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "feature_id", referencedColumnName: "featureId" }])
  feature: Feature;
}
