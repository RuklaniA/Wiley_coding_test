import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";

class Signup extends Component {
    render() {
        return (
            <div className="signup-form-layout">
               
                <Form className="signup-form">
                <h3><center>Registration</center></h3>
                <br/>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success" type="submit" className="btn-block">
                        Submit
  </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;