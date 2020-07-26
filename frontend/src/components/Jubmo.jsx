import React, { Component } from 'react';
import { Container, Jumbotron} from 'react-bootstrap';

class Jumbo extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Jumbotron fluid>
                <Container>
                  <h1>Food Management</h1>
                  <p>
                    An organised and efficient way to manage leftover food. 
                  </p>
                </Container>
            </Jumbotron>
         );
    }
}
 
export default Jumbo;
