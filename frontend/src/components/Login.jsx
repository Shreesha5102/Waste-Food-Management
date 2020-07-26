import React, { Component } from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			un: "",
			pw: ""
		}
	}

	handlechange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
	}
	validate = (event) => {
		event.preventDefault();
		var valid = false;
		var usernameArray = ["Swaroop", "Shreesha"];
		var passwordArray = ["12345", "54321"];
		var count = 0;
		for (var i = 0; i < usernameArray.length; i++){
			if ((this.state.un === usernameArray[i]) && (this.state.pw === passwordArray[i])){
				valid = true;
				break;
			}
		}
		if (valid){
			alert("Login was successful");
			window.location = "http://localhost:3000/admin/orders";
		}else{
			alert("Login was unsuccessful");
			window.location = "http://localhost:3000/admin";
		}
	}

    render() {
        
        return (
            <form onSubmit = { event => this.validate(event)}>
			    <div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4"><h3>Sign In</h3></div>
					<div class="col-md-4"></div>
				</div>
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<div className="form-group">
                    		<label>User Name</label>
                    		<input name="un" type="text" className="form-control" placeholder="Username" onChange={event => this.handlechange(event)} required/>
                		</div>
					</div>
					<div class="col-md-4"></div>
				</div><div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<div className="form-group">
                    		<label>Password</label>
                   			<input name="pw" type="password" className="form-control" placeholder="Password" onChange={event => this.handlechange(event)} required />
                		</div>
					</div>
					<div class="col-md-4"></div>
				</div>
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<button type="submit" className="btn btn-primary btn-block">Submit </button>
                		<p className="forgot-password text-right">
							<a href="#">Forgot password?</a>
                		</p>
					</div>
					<div class="col-md-4"></div>
					
				</div>
                
            </form>
        );
    }
}