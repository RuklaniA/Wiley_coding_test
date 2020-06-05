import React,{Component} from 'react';
import './App.css';
import Home from './components/Homepage';
import NavigationBar from './components/NavBar';

class App extends Component {
  render(){
    return (
      <div className="App">
          
          <Home/>
      </div>
    );
  }
  
}

export default App;
