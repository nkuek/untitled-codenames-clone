import React, {FC, useEffect, useState} from 'react';
import {Socket} from 'socket.io-client'
import {useQuery} from '@apollo/client'
import gql from 'graphql-tag'

import './CreateRoom.css';

interface Props {
    socket: typeof Socket
}

interface Word {
    word: string;
}

interface QueryData {
    smallWordList: Word[];
}

const query = gql `
    {
        smallWordList {
            word
        }
    }
`

const CreateRoom: FC<Props> = ({socket}) => {
    const [nickname, setNickname] = useState('')
    const {data} = useQuery<QueryData>(query)

    const randomNameGenerator = () => {
        const results = data?.smallWordList
        const urlString = results?.map(result => result.word.toLowerCase()).slice(0, 3).join('-')
        return urlString
    }

    const handleNewRoomSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const urlString = randomNameGenerator()
        socket.emit('create room', {nickname, room: urlString})
    };
    return (
        <div className="create-room-wrapper">
            <div className="create-room-container">
                <div className="create-room-header">
                    <h1>Welcome to Codenames!</h1>
                </div>
                <form
                    onSubmit={handleNewRoomSubmit}
                    className="create-room-form"
                >
                    <div>To create a new room, first enter a nickname</div>
                    <input onChange={e => setNickname(e.target.value)} placeholder="Enter your nickname"></input>
                    <button>Create Room</button>
                </form>
            </div>
        </div>
    );
};

export default CreateRoom;
