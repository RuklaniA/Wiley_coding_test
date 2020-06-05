import React, { Component } from "react";
import { Navbar,Nav} from "react-bootstrap";

class NavigationBar extends Component {
    render() {
        return (
            <div className="header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">WILEY Online Library</Navbar.Brand>
                   
                    <Nav className="ml-auto">
                        <Nav.Link href="#deets">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                  

                  

                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;