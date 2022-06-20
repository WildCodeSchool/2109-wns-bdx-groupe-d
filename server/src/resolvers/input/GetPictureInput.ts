import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetPictureInput {
  @Field()
  pictureName!: string;
}

export default GetPictureInput;
