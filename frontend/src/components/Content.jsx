import React, { Component } from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container fluid>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="6">
                        <Row id="button">
                            <Col md="3"></Col>
                            <Col md="6">
                                <Link to="/donate">
                                    <Button variant="success">Donate</Button>{' '}
                                </Link>
                                <Link to="/recieve">
                                    <Button variant="success">Recieve</Button>{' '}
                                </Link>
                            </Col>
                            <Col md="3"></Col>
                            
                        </Row>
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Content;