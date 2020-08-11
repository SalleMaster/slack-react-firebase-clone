import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // BEM naming convetion
    <div className='app'>
      {/* Header */}
      <Header />

      <div className='app-body'>
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router =>  Chat Screen*/}
      </div>
    </div>
  );
}

export default App;
