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
                <h2>CONTACT US</h2>
                    <div class="row ">
                        <div class="col-sm-12">
                            <h4> Please do not hesitate to contact us directly</h4>
                            <h4><span class="glyphicon glyphicon-map-marker"></span>Limit Breakers</h4><br></br>
                            <h4><span class="glyphicon glyphicon-phone"></span> +91 6362458730</h4><br></br>
                            <h4><span class="glyphicon glyphicon-phone"></span> +91 9686867091</h4><br></br>
                            <h4><span class="glyphicon glyphicon-envelope"></span> foodforall@gmail.com</h4><br></br>
                            <h4><span class="glyphicon glyphicon-envelope"></span> limitbreakers@gmail.com </h4><br></br>
                        </div>
                    </div>
          </center> 
          
      
            </Container>
         );
    }
}
 
export default Contact;
