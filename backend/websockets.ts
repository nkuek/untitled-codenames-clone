import {Socket} from 'socket.io'
const io = require('socket.io')({
    cors: {
        origin: '*'
    }
})

interface CreateRoomData {
    nickname: string,
    room: string,
}

interface SocketExt extends Socket {
    user: string
}

// Keep updated list of users connected to each room
const connectedUsers = {}

io.on('connection', (socket:SocketExt) => {
    socket.on('test', () => {
        console.log('hello from test route!')
    })

    socket.on('create room', (data:CreateRoomData) => {
        socket.user = data.nickname
        socket.join(data.room)
    })
})

export default io