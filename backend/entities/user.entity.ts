import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./cart.entity";

@Index("uq_user_email", ["email"], { unique: true })
@Entity("user", { schema: "aplikacija" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("varchar", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("varchar", { name: "password_hash", length: 255 })
  passwordHash: string;

  @Column("varchar", {
    name: "password_reset_code",
    nullable: true,
    length: 255,
  })
  passwordResetCode: string | null;

  @Column("varchar", { name: "forename", length: 64 })
  forename: string;

  @Column("varchar", { name: "surname", length: 64 })
  surname: string;

  @Column("varchar", { name: "phone_number", length: 24 })
  phoneNumber: string;

  @Column("text", { name: "postal_address" })
  postalAddress: string;

  @Column("tinyint", {
    name: "is_active",
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
