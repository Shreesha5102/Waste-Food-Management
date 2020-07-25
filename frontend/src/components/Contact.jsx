import React, { Component } from 'react';
import {Row, Container} from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container fluid id="contact">
                <Row>
                    <h2>About</h2>
                </Row>
                <Row>
                    <p>
                        This Project is developed by <strong>"LIMIT BREAKER"</strong>:<br></br> 
                        ->Raghav Jindal<br></br>
                        ->Swaroop Kumar<br></br>
                        ->Shubang C S<br></br>
                        ->Shreesha Bhat<br></br>
                    </p>
                    
                </Row>
            </Container>
         );
    }
}
 
export default Contact;
