import React, { Component } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name: "",
            Phone_no: "",
            Street: "",
            Country: "India",
            State: "",
            City: "",
            No_of_pep: "",
            No_of_item: ""
         }
    }

    handlechange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    postdetails = (e) => {
        e.preventDefault();
        console.log("Submiting Donor Form");

        fetch("http://localhost:4000/route/donate/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'Name': this.state.Name,
                'Phone_no': this.state.Phone_no,
                'Street': this.state.Street,
                'Country': this.state.Country,
                'State': this.state.State,
                'City': this.state.City,
                'No_of_pep': this.state.No_of_pep,
                'No_of_item' : this.state.No_of_item  
            })
        })
        .then(res => res.json())
         .then( (data) => {
            console.log(data);
        })
    }

    render() { 
        return ( 
            <Container fluid>
                <Form onSubmit={ e => this.postdetails(e)}>
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
                                <Form.Control name="Name" type="text" placeholder="Name" onChange={event => this.handlechange(event)} required />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicnumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name="Phone_no" type="text" placeholder="Phone Number" pattern="^[6-9][0-9]{9}$" onChange={event => this.handlechange(event)} required />
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                    
                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicname">
                                <Form.Label>street</Form.Label>
                                <Form.Control name="Street" type="text" placeholder="street" onChange={event => this.handlechange(event)} required/>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control name="Country" as="select" className="countries order-alpha presel-IN" id="countryId" onChange={event => this.handlechange(event)} required>
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
                                <Form.Control name="State" as="select" className="states order-alpha" id="stateId" onChange={event => this.handlechange(event)} required>
                                    <option>select</option>
                                </Form.Control>
                            </Form.Group> 
                        </Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control name="City" as="select" className="cities order-alpha limit-pop-10000" id="cityId" onChange={event => this.handlechange(event)} required>
                                    <option>select</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                    </Row>

                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicnoofpeople">
                                <Form.Label>No. of People it can serve</Form.Label>
                                <Form.Control name="No_of_pep" type="text" placeholder="Ex- 10" onChange={event => this.handlechange(event)} required/>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicname">
                                <Form.Label>No. of Items</Form.Label>
                                <Form.Control name="No_of_item" type="text" placeholder="Ex- 5" onChange={event => this.handlechange(event)} required/>
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                        
                    </Row>

                    <Row>
                    <Col md="3"></Col>
                        <Col md="3">
                            <Button type="Submit">Submit</Button>
                        </Col>
                        <Col md="3"></Col>
                        <Col md="3"></Col>
                    </Row>
                </Form>
        <p>{this.state.Name + this.state.Country}</p>
            </Container>
         );
    }
}
 
export default Donate;
