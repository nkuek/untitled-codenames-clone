import React from "react"

const JoinRoom = () => {
    const handleJoinRoom = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className="create-room-wrapper">
        <div className="create-room-container">
            <div className="create-room-header">
                <h1>Welcome to Codenames!</h1>
            </div>
            <form
                onSubmit={handleJoinRoom}
                className="create-room-form"
            >
                <div>To enter the room, first enter a nickname</div>
                <input placeholder="Enter your nickname"></input>
                <button>Join Room</button>
            </form>
        </div>
    </div>
    )
}

export default JoinRoom
