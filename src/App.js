import React from 'react';
import './App.css';
import Home from './containers/Home/index'
import Header from './components/Header/index'
import Hero from './components/Hero/index'
import {BrowserRouter as Router,  Switch,   Route,  Link} from "react-router-dom";
import ContactUs from './containers/contactUs/index'
import Post from './containers/Post/index'

function App() {
  return (
      
       <Router>
        <div className="App">
          <Header/>
          <Hero/>
          
          <Route path="/" exact component={Home}/>
          <Route path='/contact-us' component={ContactUs }/>
          <Route path='/post' component={Post }/>
        
        </div>
      </Router>
  );
}

export default App;
