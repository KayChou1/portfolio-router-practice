import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import {Route, Switch} from 'react-router-dom';
import Photos from './Components/Photos';
import Particles from 'react-particles-js';






function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <Particles/>
              
        <Switch>
        <Route path="/"component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/photos" component={Photos} />
      <Route component={Error} />
      </Switch>
     
    </header>
    </div>
  );
}


export default App;
