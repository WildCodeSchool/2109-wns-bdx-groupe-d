import { Arg, Mutation, Query, Resolver } from 'type-graphql';
// @ts-ignore
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
// @ts-ignore
import Upload from 'graphql-upload/Upload.js';
import { createWriteStream } from 'fs';

import File from '../File';

class FileUtils extends File {
	static async createFile( { createReadStream, filename }: Upload, projectName: string) {
    console.log(projectName)
    if (createReadStream && filename) {
      return await new Promise(async (resolve, reject) => createReadStream()
        .pipe(createWriteStream(__dirname + `/../../images/${projectName}/${filename}`))
        .on('finish', () => resolve(true))
        .on('close', () => resolve(true))
        .on('error', () => reject(false))
      );
    }
    
    return false;
	}

	// @Mutation(() => File)
	// async deleteFile(@Args() { id }: DeleteFileInput) {
	// 	return FileUtils.deleteFile({ id });
	// }
}

export default FileUtils;