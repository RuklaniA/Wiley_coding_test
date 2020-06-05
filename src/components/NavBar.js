import React,{Component} from "react";
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";

class NavigationBar extends Component{
    render(){
        return(
            <div className="header">
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">WILEY Online Library</Navbar.Brand>
          
                <div className="topnav-right">
                <Button >Hi</Button>
                </div>
            

          </Navbar>
          </div>
        )
    }
}

export default NavigationBar;