import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/"component={Home} exact/>
      <Route path="/about" component={About} />
      <Route component={Error} />
      </Switch>
      <header className="App-header">
     
    </header>
    </div>
  );
}

export default App;
