import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    // BEM naming convetion
    <div className='app'>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
