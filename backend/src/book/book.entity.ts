import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';

@Entity({ name: 'book' })
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  ISBN: string;

  @Column({
    nullable: true
  })
  author: string;

  @Column({
    nullable: true
  })
  rating: string;

  @Column({
    nullable: true
  })
  latest_review: string;

  @Column({
    nullable: true
  })
  cover: string;

  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne((type) => CategoryEntity, (category) => category.bookes)
  category: CategoryEntity;
}
