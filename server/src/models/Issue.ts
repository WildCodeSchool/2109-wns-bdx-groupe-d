import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
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

	@ManyToOne(() => Project, (project) => project.id)
	@JoinColumn({ name: 'project_id' })
	project_id!: number;

	@ManyToMany(() => User)
	@JoinTable({
		name: 'issue_user',
		joinColumn: {
			name: 'issue_id',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'user_id',
			referencedColumnName: 'id',
		},
	})
	user_id!: User;
}

export default Issue;
