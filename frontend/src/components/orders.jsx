import React, { Component } from 'react';

import {Table, Row, Col, Container} from 'react-bootstrap';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: []
         }
    }

    componentDidMount = () => {
        this.getOrder();
    }
    getOrder = () => {
        fetch("http://localhost:4000/route/order")
        .then(res => res.json())
         .then( data => {
             console.log("Orders")
             this.setState({
                orders: data
             })
         })
    }
    render() { 
        return ( 
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col><h2>Order Details</h2></Col>
                    <Col></Col>
                    
                </Row>
                <Table striped bordered hover variant="primary">
                    <thead>
                        <td>Donor Name</td>
                        <td>Reciever Name</td>
                        <td>Donor Phone no</td>
                        <td>Reciever Phone no</td>
                        <td col="2">Reciever address</td>
                    </thead>
                    <tbody>
                        {
                            this.state.orders.map((event,i) => (
                                    <tr key={i}>
                                        <td>{event.dName}</td>
                                        <td>{event.rName}</td>
                                        <td>{event.dPhone_no}</td>
                                        <td>{event.rPhone_no}</td>
                                        <td>{event.rStreet}</td>
                                        <td>{event.rCity}</td>
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
 
export default Order;