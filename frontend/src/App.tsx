import './App.css';
import Testing from './components/Testing';
import {Route, Switch} from 'react-router-dom'
import SplashPage from './components/Splash'


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
            <Route>
                Page not found
            </Route>
        </Switch>
    </>
  );
}

export default App;
