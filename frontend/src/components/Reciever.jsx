import React, { Component } from 'react';
import { Form, Container, Row, Col, Table } from 'react-bootstrap';

class Reciever extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            donators_list: []
         }
    }

    componentDidMount = () =>{
        this.getDonors();
    }

    getDonors = () => {
        fetch("http://localhost:4000/route/recieve")
        .then(res => res.json())
         .then( data => {
             console.log("getting Donors list");
             this.setState({
                 donators_list: data
             });
         })
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
                <Table striped bordered hover variant="primary">
                    <thead>
                        <th>Name</th>
                        <th>Phone_no</th>
                        <th>No_of_people</th>
                    </thead>
                    <tbody>
                        {
                            this.state.donators_list.map((event,i) => (
                                    <tr key={i}>
                                        <td>{event.Name}</td>
                                        <td>{event.Phone_no}</td>
                                        <td>{event.No_of_pep}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </Table>
                
            </Container>
         );
    }
}
 
export default Reciever;