import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class LogoutInput {
  @Field()
  sessionId!: string;

}

export default LogoutInput;
