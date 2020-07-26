import React, { Component } from 'react';
import { Form, Container, Row, Col, Table, Button } from 'react-bootstrap';

class Reciever extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            donators_list: [],
            Name: "",
            Phone_no: "",
            Street: "",
            Country: "India",
            State: "",
            City: "",
            rDetails: "false"
         }
    }

    componentDidMount = () =>{
        
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

    handlechange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    postDetails = (e) => {
        e.preventDefault();
        console.log("Submiting Reciever Form");
        
        fetch("http://localhost:4000/route/recievedetails/", {
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
            })
        })
        .then(res => res.json())
         .then( (data) => {
            console.log(data);
            this.setState({
                rDetails: "true"
            });
            this.getDonors();
        })
    }

    placeRequest = (dName, dPhone_no) => {
        console.log("Placing Order");
        if(this.state.rDetails === "true" ){
            fetch("http://localhost:4000/route/order",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'dName': dName,
                    'rName': this.state.Name,
                    'dPhone_no': dPhone_no,
                    'rPhone_no': this.state.Phone_no,
                    'rStreet': this.state.Street,
                    'rState': this.state.State,
                    'rCity': this.state.City 
                })
            })
            .then(res => res.json())
             .then( data => {
                 alert("Request placed");
                 console.log("Ordered Placed");
             })
        }else{
            alert("Please enter Your Details")
        } 
    }

    render() { 
        return ( 
            <Container fluid>
                <Form onSubmit= { e => this.postDetails(e)} >
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
                                <Form.Control name="Name" type="text" placeholder="Name" onChange={event => this.handlechange(event)} required/>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicnumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name="Phone_no" type="text" placeholder="Phone Number" pattern="^[6-9][0-9]{9}$" onChange={event => this.handlechange(event)} required/>
                            </Form.Group>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                    
                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                            <Form.Group controlId="formBasicname">
                                <Form.Label>street</Form.Label>
                                <Form.Control name="Street" type="text" placeholder="street" onChange={event => this.handlechange(event)} required />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control name="Country" as="select" className="countries order-alpha presel-IN" id="countryId"  required>
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
                            <Button type="Submit">Submit</Button>
                        </Col>
                        <Col md="3"></Col>
                        <Col md="3"></Col>
                    </Row>
                </Form>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                        <Table striped bordered hover variant="primary">
                        <thead>
                            <td>Name</td>
                            <td>Phone no</td>
                            <td>No of people</td>
                        </thead>
                        <tbody>
                            {
                                this.state.donators_list.map((event,i) => (
                                        <tr key={i}>
                                            <td>{event.Name}</td>
                                            <td>{event.Phone_no}</td>
                                            <td>{event.No_of_pep}</td>
                                            <td><Button onClick= { (dname, dPhone_no) => this.placeRequest(event.Name, event.Phone_no)}>Request Food</Button> </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                        </Table>
                    </Col>
                    <Col md="2"></Col>
                
                </Row>
                
                <p>{this.state.rDetails}</p>
                
            </Container>
         );
    }
}
 
export default Reciever;