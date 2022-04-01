import { Field, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
    ManyToOne,
    JoinColumn
  } from 'typeorm';
import User from './User';

@Entity()
@ObjectType()
class Session extends BaseEntity {
    @PrimaryColumn()
    @Field()
    uid!: string;

    @ManyToOne(() => User, (user) => user.id, {onDelete: 'CASCADE'})
    @JoinColumn({ name: 'user' })
    @Field()
    user!: User;
    
}

export default Session;