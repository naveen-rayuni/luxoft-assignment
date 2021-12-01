import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";
 
class Profile extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      name: "",
      email: "",
      role: "",
    };
  }

  // This will get the user based on the id from the database.
  componentDidMount() {

    axios
      .get("http://localhost:5555/user/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This following section will display the profile of the user.
  render() {
    return (
      <div className="pt-5">
        <h3>Profile</h3>

          <div className="form-group">
            <label>Name: </label>
            <span className="ms-3">{this.state.name}</span>
          </div>
          <div className="form-group mt-2">
            <label>Email: </label>
            <span className="ms-3">{this.state.email}</span>
          </div>
          <div className="form-group mt-2">
            <label>Role: </label>
            <span className="ms-3">{this.state.role}</span>
          </div>
          <br />
 
      </div>
    );
  }
}
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 
export default withRouter(Profile);