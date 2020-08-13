import React, { useState, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

// Context API
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convetion
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Fragment>
            {/* Header */}
            <Header />

            <div className='app-body'>
              {/* Sidebar */}
              <Sidebar />
              {/* React-Router =>  Chat Screen*/}
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
