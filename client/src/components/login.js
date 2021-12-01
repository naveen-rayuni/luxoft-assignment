import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
 
class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  // These methods will update the state properties.
  onChangeEmail(e) {
    let error = "";
    if (e.target.value.length === 0) {
      error = "Email cannot be empty";
    }
    this.setState((prevState) => ({
      email: e.target.value,
      errors: {
        ...prevState.errors,
        email: error,
      },
    }));
  }

  onChangePassword(e) {
    let error = ""
    if (e.target.value.length === 0) {
      error = "Password cannot be empty";
    }
    this.setState((prevState) => ({
      password: e.target.value,
      errors: {
        ...prevState.errors,
        password: error,
      },
    }));
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    let errors = {};

    if (this.state.email.length === 0) {
      errors["email"] = "Email cannot be empty";
    }
    if (this.state.password.length === 0) {
      errors["password"] = "Password cannot be empty";
    }

    if (this.state.email.length !== 0 && this.state.password.length !== 0) {
      let data = {
        email: this.state.email,
        password: this.state.password,
      };

      axios.post("http://localhost:5555/user/login", data).then((res) => {
        if (res && res.data && res.data.valid) {
          let path = "all";

          if (res.data.message.role === "EMPLOYEE") {
            path = `profile/${res.data.message.id}`;
          }

          this.props.history.push(path);
        } else {
          this.setState({
            errors: { commonError: res.data.message },
          });
        }
      });
    } else {
      this.setState({
        errors: errors,
      });
    }
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ paddingTop: 50, width: "50%", margin: "0 auto" }}>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="text-danger pb-3">
            {this.state.errors.commonError}
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div className="form-group mt-2">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div className="form-group mt-2">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);