import { Stream } from "stream";
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class CreateFileInput {
  @Field()
  filename!: string;

  @Field()
  mimetype!: string;

  @Field()
  encoding!: string;

  @Field(() => Stream)
  createReadStream!: () => Stream;
}

export default CreateFileInput;