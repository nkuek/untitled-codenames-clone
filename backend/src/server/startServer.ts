import {ApolloServer} from 'apollo-server-express'
import * as cors from 'cors'
import * as express from 'express';

import accessEnv from '../../src/helpers/accessEnv'
import resolvers from '../graphql/resolvers'
import typeDefs from '../graphql/typeDefs'

// Grabs the PORT value from the .env file utilizing accessEnv
const PORT = accessEnv("PORT", 7000);

// Create new ApolloServer instance utilizing the resolvers and typeDefs
const apolloServer = new ApolloServer({resolvers, typeDefs})

// Initialize express server
const app = express();

// Require cors
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

// Integrate ApolloServer with express
apolloServer.applyMiddleware({app, path: "/graphql"})

// Create express server
app.listen(PORT, "0.0.0.0", () => {
    console.info(`codenames-db listening on port ${PORT}`)
})