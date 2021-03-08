import {gql} from 'apollo-server'

// define the schema for graphql
// '!' indicates that the field is required
// [] indicates that the result is an array

const typeDefs = gql`
    type Word {
        id: ID!
        word: String!
    }

    type Query {
        smallWordList: [Word!]!
        medWordList: [Word!]!
        largeWordList: [Word!]!
    }
`

export default typeDefs