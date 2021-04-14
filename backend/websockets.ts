import {Socket} from 'socket.io'
const io = require('socket.io')({
    cors: {
        origin: '*'
    }
})

// Keep updated list of users connected to each room
const connectedUsers = {}

io.on('connection', (socket:Socket) => {
    console.log('hello!')
})

export default io