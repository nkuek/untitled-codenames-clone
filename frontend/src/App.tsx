import io from 'socket.io-client'

import Testing from './components/Testing';
import {Route, Switch} from 'react-router-dom'
import SplashPage from './components/Splash'
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';

import './App.css';

const socket = io('localhost:7000')

function App() {
  return (
    <>
        <Switch>
            <Route exact path='/'>
                <SplashPage />
            </Route>
            <Route exact path='/test'>
                <Testing />
            </Route>
            <Route exact path='/room/create'>
                <CreateRoom socket={socket}/>
            </Route>
            <Route exact path='/room/:roomName'>
                <JoinRoom />
            </Route>
            <Route>
                Page not found
            </Route>
        </Switch>
    </>
  );
}

export default App;
