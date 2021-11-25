import { Field, ID, InvalidDirectiveError, ObjectType } from 'type-graphql';
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
  import Organization from './Organization';

  @Entity()
  @ObjectType()
class Project extends BaseEntity {
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

    @ManyToOne(() => Organization, organization => organization.id)
    @JoinColumn({name: 'organization_id'})
    organization_id!: number;

    @ManyToMany(() => User)
    @JoinTable({
        name: "project_user",
        joinColumn: {
            name: "project_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        }
    })
    user_id!: User;

    // @ManyToMany(() => Issue)
    // @JoinTable({
    //     name: "project_issues",
    //     joinColumn: {
    //         name: "project_id",
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: "issue_id",
    //         referencedColumnName: "id"
    //     }
    // })
    // project_id!: Issue;
}

export default Project;