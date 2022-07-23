import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { CartArticle } from "./cart-article.entity";
import { Order } from "./order.entity";

@Index("fk_cart_user_id", ["userId"], {})
@Entity("cart", { schema: "aplikacija" })
export class Cart {
  @PrimaryGeneratedColumn({ type: "int", name: "cart_id", unsigned: true })
  cartId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.carts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @OneToMany(() => CartArticle, (cartArticle) => cartArticle.cart)
  cartArticles: CartArticle[];

  @OneToOne(() => Order, (order) => order.cart)
  order: Order;
}
