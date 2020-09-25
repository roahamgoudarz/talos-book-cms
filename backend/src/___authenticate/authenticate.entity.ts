import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
// import { AuthenticateEntity } from '../authenticate/authenticate.entity';

@Entity({ name: 'authenticate' })
export class AuthenticateEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @ManyToOne((type) => AuthenticateEntity, (authenticate) => authenticate.addresses)
  // authenticate: AuthenticateEntity;
}
