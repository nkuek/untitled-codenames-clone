import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const cache = new InMemoryCache()

// instantiate new Apollo Client
// make sure you have a .env file containing the services URI
// see .env.example

const client = new ApolloClient({
    cache,
    link: new HttpLink({uri: process.env.REACT_APP_SERVICES_URI + "/graphql"})
})

export default client