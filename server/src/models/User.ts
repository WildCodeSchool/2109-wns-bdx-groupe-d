import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity()
@ObjectType()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  first_name!: string;

  @Column()
  @Field()
  last_name!: string;

  @Column()
  @Field()
  email!: string;

  @Column()
  @Field()
  password!: string;
  
  @Column()
  @Field()
  roles!: number;

  @Column()
  @Field()
  issue_id!: string;

  @Column()
  @Field()
  project_id!: string;

  @Column()
  @Field()
  organization_id!: string;

  @Column()
  @Field()
  created_at!: string;
}

export default User;
