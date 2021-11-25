import { IsFirebasePushId, IsSurrogatePair } from 'class-validator';
import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Organization from './Organization'
import Project from './Project';
@Entity()
@ObjectType()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;
  
  @Column()
  @Field()
  roles!: number;

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
  created_at!: string;

  @ManyToOne(() => Organization, organization => organization.id )
  @JoinColumn({name: 'organization_id'})
  organization_id!: string;

}

export default User;
