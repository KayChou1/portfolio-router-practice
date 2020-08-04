import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import {Route, Switch} from 'react-router-dom';
import Photos from './Components/Photos';
// import {Particles,Component} from '/Components/react-particles-js';



// class App1 extends Component{
  
//   render(){
//       return (
//           <Particles 
//               params={{
//                   particles: {
//                       shape: {
//                           type: 'images',
//                           image: [
//                               {src: 'path/to/first/image.svg', height: 20, width: 20},
//                               {src: 'path/to/second/image.jpg', height: 20, width: 20},
//                           ]
//                       }
//                   }
//               }} />
//       );
//   };

// }


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
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
