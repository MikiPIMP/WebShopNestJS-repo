import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uq_administrator_username", ["username"], { unique: true })
@Entity("administrator", { schema: "aplikacija" })
export class Administrator {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "administrator_id",
    unsigned: true,
  })
  administratorId: number;

  @Column("varchar", { name: "username", unique: true, length: 64 })
  username: string;

  @Column("varchar", { name: "password_hash", length: 255 })
  passwordHash: string;

  @Column("tinyint", {
    name: "is_active",
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number;
}
