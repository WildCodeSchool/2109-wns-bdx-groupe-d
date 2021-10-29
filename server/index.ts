import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';


dotenv.config();

const runServer = async () => {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test"
  });
  // eslint-disable-next-line no-console
  console.log("Connected to database");

//   const schema = await buildSchema({ resolvers: [WilderResolver] });
  const server = new ApolloServer({ schema });

  // The `listen` method launches a web server.
  server.listen({ port: 3004 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

runServer();