import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class LoginInput {
  @Field()
  email!: string;

  @Field()
  password!: string;

  // @Field()
  // sessionId!: string;
}

export default LoginInput;
