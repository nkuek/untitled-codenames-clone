import {ApolloServer} from 'apollo-server-express'
import * as cors from 'cors'
import * as express from 'express';

import accessEnv from '../../src/helpers/accessEnv'
import resolvers from '../graphql/resolvers'
import typeDefs from '../graphql/typeDefs'

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({resolvers, typeDefs})

const app = express();

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true,
        preflightContinue: true,
        exposedHeaders: [
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Origin, Origin"
        ]
    })
)

apolloServer.applyMiddleware({app, path: "/graphql"})

app.listen(PORT, "0.0.0.0", () => {
    console.info(`codenames-db listening on port ${PORT}`)
})