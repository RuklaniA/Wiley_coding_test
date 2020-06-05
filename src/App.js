import React,{Component} from 'react';
import './App.css';
import Home from './components/Homepage';
import NavigationBar from './components/NavBar';
import Signup from './components/Signup';

class App extends Component {
  render(){
    return (
      <div className="App">
          <NavigationBar/>
          <Home/>
          <Signup/>
      </div>
    );
  }
  
}

export default App;
