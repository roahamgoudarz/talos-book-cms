import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { BookEntity } from '../book/book.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'json',
    comment: `[{ name: "string", url: "string"}]`,
    nullable: true,
  })
  cover: Array<{ name: string, url: string }>;

  @OneToMany((type) => BookEntity, (book) => book.category)
  @Type((t) => BookEntity)
  bookes: BookEntity[];
}
