import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class CreateProjectInput {
  @Field()
  name!: string;

  @Field()
  description?: string;

  @Field()
  created_at!: string;
}

export default CreateProjectInput;
