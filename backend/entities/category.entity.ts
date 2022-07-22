import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Feature } from "./feature.entity";
import { Article } from "./article.entity";

@Index("uq_category_name", ["name"], { unique: true })
@Index("fk_category_parent__category_id", ["parentCategoryId"], {})
@Entity("category", { schema: "aplikacija" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "category_id", unsigned: true })
  categoryId: number;

  @Column("varchar", { name: "name", unique: true, length: 128 })
  name: string;

  @Column("varchar", { name: "image_path", length: 255 })
  imagePath: string;

  @Column("int", {
    name: "parent__category_id",
    nullable: true,
    unsigned: true,
  })
  parentCategoryId: number | null;

  @ManyToOne(() => Category, (category) => category.categories, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "parent__category_id", referencedColumnName: "categoryId" },
  ])
  parentCategory: Category;

  @OneToMany(() => Category, (category) => category.parentCategory)
  categories: Category[];

  @OneToMany(() => Feature, (feature) => feature.category)
  features: Feature[];

  @OneToMany(() => Article, (article) => article.category)
  articles: Article[];
}
