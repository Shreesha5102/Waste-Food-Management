import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    LIMIT BREAKERS
                </Navbar.Brand>
            </Navbar>
         );
    }
}
 
export default Bar;