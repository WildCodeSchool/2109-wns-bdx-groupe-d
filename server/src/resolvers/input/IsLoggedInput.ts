import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class IsLoggedInput {
  @Field()
  sessionId!: string;

}

export default IsLoggedInput;
