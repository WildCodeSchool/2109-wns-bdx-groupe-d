import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteSessionsInput {
  @Field()
  id!: number;
}

export default DeleteSessionsInput;
