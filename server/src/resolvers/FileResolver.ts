import { Arg, Mutation, Resolver } from 'type-graphql';
// @ts-ignore
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
// @ts-ignore
import Upload from 'graphql-upload/Upload.js';
import { createWriteStream } from 'fs';

import File from '../models/File';

@Resolver(File)
class FileResolver {
	@Mutation(() => Boolean)
	async createFile(
    @Arg('picture', () => GraphQLUpload)
      { createReadStream, filename }: Upload
    ) {
      if (createReadStream && filename) {
        return await new Promise(async (resolve, reject) => createReadStream()
        .pipe(createWriteStream(__dirname + `/../../images/${filename}`))
        .on('finish', () => resolve(true))
        .on('close', () => resolve(true))
        .on('error', () => reject(false))
      );
      }
      return false;
	}
}

export default FileResolver;
