import React from 'react';
import './App.css';
import Home from './Home/index'
import Header from './components/Header/index'
import Hero from './components/Hero/index'

function App() {
  return (
    <div className="App">
      
        <Header/>
        <Hero/>
        <Home/> 

        
    </div>
  );
}

export default App;
