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

    // Data = object containing result of query
    // loading = boolean indicating if query is still begin executed
    const {data, loading} = useQuery<QueryData>(query)

    // data is in a strange format. unsure how to format it on the backend.
    const results = (data?.smallWordList)
    console.log(results)

    // format data into individual words
    const words = results?.map(result => result.word)
    console.log(words)

    // conditionally render testing component if the query is no longer loading
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
