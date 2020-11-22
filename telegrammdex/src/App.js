import { useState } from 'react';
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
          <Route exact path='/'>
            <div className='page-1'>
            <Dialogs />
            <EmptyPage />
            </div>
          </Route>

          <Route exact path='/:chat'>
          <div className='page-2'>
            <Dialogs />
            <Messages />
            </div>
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
