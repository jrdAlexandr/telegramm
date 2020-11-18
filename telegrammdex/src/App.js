import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Dialogs from './components/Dialogs';
import EmptyPage from './components/EmptyPage';
import Messages from './components/Messages';
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <Route exact path='/'>
            <Dialogs />
            <EmptyPage />
          </Route> */}

          <Route exact path='/'>
            <Dialogs />
            <Messages />
          </Route>
        </Switch>
      </div>
    </Router>

    // <div className='App'>
    //   <Dialogs />

    //   <EmptyPage />

    //   <Messages />
    // </div>
  );
}

export default App;
