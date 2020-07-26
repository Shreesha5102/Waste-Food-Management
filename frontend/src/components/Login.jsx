import React, { Component } from "react";

export default class Login extends Component {
    render() {
        const validate = () => {
            var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
	var usernameArray = ["Swaroop", "Shreesha"];
	var passwordArray = ["12345", "54321"];
	for (var i = 0; i < usernameArray.length; i++)
 {

	if ((un == usernameArray[i]) && (pw == passwordArray[i]))
	{
		valid = true;
		break;
	}
}
	if (valid)
	{
		alert("Login was successful");
		window.location = "www.google.ie";
		return false;
	}
	var again = " tries";
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Wrong password or username")
		count--;
	}
	else
	{
		alert("Incorrect password or username you are now blocked");
		document.login.username.value = "You are now Blocked";
		document.login.password.value = "Fool you can't see this";
		document.login.username.disabled = true;
		document.login.password.disabled = true;
		return false;
	}
        }
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={validate}>Submit </button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}