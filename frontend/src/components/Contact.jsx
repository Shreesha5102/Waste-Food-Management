import React, { Component } from 'react';
import { Container} from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container fluid id="contact">
            <center>   
                <h3>CONTACT US</h3>
                    <div class="row ">
                        <div class="col-sm-12">
                            <h6> Please do not hesitate to contact us directly</h6>
                            <h6><span class="glyphicon glyphicon-map-marker"></span>Limit Breakers</h6><br></br>
                            <h6><span class="glyphicon glyphicon-phone"></span> +91 6362458730</h6><br></br>
                            <h6><span class="glyphicon glyphicon-phone"></span> +91 9686867091</h6><br></br>
                            <h6><span class="glyphicon glyphicon-envelope"></span> foodforall@gmail.com</h6><br></br>
                            <h6><span class="glyphicon glyphicon-envelope"></span> limitbreakers@gmail.com </h6><br></br>
                        </div>
                    </div>
          </center> 
          
      
            </Container>
         );
    }
}
 
export default Contact;
