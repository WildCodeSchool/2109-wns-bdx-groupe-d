import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteWilderInput {
  @Field()
  id!: number;
}

export default DeleteWilderInput;
