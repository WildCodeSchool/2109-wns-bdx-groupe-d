import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	OneToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';

@Entity()
@ObjectType()
class Issue extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id!: number;

	@Column()
	@Field()
	name!: string;

	@Column()
	@Field()
	description?: string;

	@Column()
	@Field()
	created_at!: Date;

	@Column()
	@Field()
	updated_at!: Date;

	@Column()
	@Field()
	status!: string;

	@Column()
	@Field()
	priority!: string;

	@Column()
	@Field()
	project_name!: string;

	@Column()
	@Field()
	project_id!: number;

	@ManyToOne(() => User, (user) => user.id)
	@JoinColumn({ name: 'user' })
	@Field(() => User)
	user?: User;

	@ManyToOne(() => User, (user) => user.id)
	@JoinTable()
	@Field(() => User)
	user_assigned?: User;
}

export default Issue;
