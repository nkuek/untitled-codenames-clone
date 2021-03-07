import {gql} from 'apollo-server'

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