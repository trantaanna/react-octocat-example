import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='profile' ><Profile /></div>
      <div className='content'><Navbar/></div>
     
    </div>
  );
}

export default App;
