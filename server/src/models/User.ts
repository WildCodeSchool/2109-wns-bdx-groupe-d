import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import Color from './Color';
import Organization from './Organization';

@Entity()
@ObjectType()
class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id!: number;

	@Column()
	@Field()
	roles!: string;

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

	@ManyToOne(() => Organization, (organization) => organization.id)
	@JoinColumn({ name: 'organization_id' })
	@Field()
	organization_id!: number;

	@ManyToOne(() => Color, (color) => color.id)
	@JoinColumn({ name: 'color_id' })
	@Field()
	color_id!: number;
}

export default User;
