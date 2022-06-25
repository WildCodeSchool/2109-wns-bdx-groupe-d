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

import User from './User';
import Project from './Project';

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

	// @ManyToMany(() => User)
	// @JoinTable({
	// 	name: 'issue_user',
	// 	joinColumn: {
	// 		name: 'issue_id',
	// 		referencedColumnName: 'id',
	// 	},
	// 	inverseJoinColumn: {
	// 		name: 'user_id',
	// 		referencedColumnName: 'id',
	// 	},
	// })
	@ManyToOne(() => User, (user) => user.id)
	@JoinColumn({ name: 'user' })
	@Field()
	user?: User;
}

export default Issue;
