import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

class Reciever extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return ( 
            <Container fluid>
                <Form>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="3"><h2>Details</h2></Col>
                        <Col md="3"></Col>
                        <Col md="3"></Col>
                        
                    </Row>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicnumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Phone Number" pattern="^[6-9][0-9]{9}$" />
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                    
                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicname">
                                <Form.Label>street</Form.Label>
                                <Form.Control type="text" placeholder="street" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control name="country" as="select" className="countries order-alpha presel-IN" id="countryId" >
                                    <option>select</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                    </Row>

                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control name="state" as="select" className="states order-alpha" id="stateId">
                                    <option>select</option>
                                </Form.Control>
                            </Form.Group> 
                        </Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" as="select" className="cities order-alpha limit-pop-10000" id="cityId">
                                    <option>select</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Form>

                
            </Container>
         );
    }
}
 
export default Reciever;