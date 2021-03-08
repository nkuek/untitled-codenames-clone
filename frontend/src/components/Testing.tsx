import {useQuery} from '@apollo/client'
import gql from 'graphql-tag'

interface Word {
    word: string;
}

interface QueryData {
    smallWordList: Word[];
}

const query = gql`
    {
        smallWordList {
            word
        }
    }`

const Testing = () => {
    const {data, loading} = useQuery<QueryData>(query)
    const results = (data?.smallWordList)
    const words = results?.map(result => result.word)

    return (
        loading ? <h1>Loading...</h1> :
        <>
            <h1>Testing</h1>
            <div>
                {words?.map((word, idx) => (
                    <li key={idx}>{word}</li>
                ))}
            </div>
        </>
    )
}

export default Testing
