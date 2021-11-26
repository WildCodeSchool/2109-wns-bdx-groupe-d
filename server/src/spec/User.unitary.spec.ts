import {ApolloServer} from 'apollo-server';
import { getConnection } from "typeorm";
import getApolloServer from "../apollo-server";
import getDatabaseConnection from "../database-connection";
import User from '../models/User';


describe('UserResolver', () => {
    let server: ApolloServer;
    beforeAll(async () => {
        server = await getApolloServer();
    });
    beforeEach(() => getDatabaseConnection());
    afterEach(() => getConnection().close());
    describe('CreateUser', () => {
        const createUserData = `
            mutation($first_name: String!, $last_name: String!, roles: String!, email: String!, password: String!, color_id: Number!, created_at: String!) {
                user(first_name, last_name, roles, email, password, color_id, created_at) {
                    id
                    first_name
                    last_name
                    roles
                    email
                    password
                    color_id
                    created_at
                }
            }`;

        it('create a use in database', async () => {
            const result = await server.executeOperation({
                query: createUserData,
                variables: {
                    first_name: "Gros",
                    last_name: "Tony",
                    roles: `['ROLE_USER']`,
                    email: 'azerty@poiuy.com',
                    password: 'root',
                    color_id: 9,
                    created_at: "2016-07-20T17:30:15+05:30"
                },
            });

            expect(await User.findOne({ first_name: "Gros" })).toHaveProperty(
                "last_name",
                "Tony"
            );

            expect(result.errors).toBeUndefined();
            expect(result.data?.createUserData).toEqual({
                first_name: "Gros",
                last_name: "Tony",
                roles: `['ROLE_USER']`,
                email: 'azerty@poiuy.com',
                password: 'root',
                color_id: 9,
                created_at: "2016-07-20T17:30:15+05:30"
            })
        })
    })
})