import React, { Component } from "react";
import axios from 'axios';

const Record = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.role}</td>
  </tr>
);

export default class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }

  componentDidMount() {
    // This method will get the data from the database.
    this.getUsersList();
  }

  getUsersList(){
    let url = "http://localhost:5555/users/";
    
    axios
      .get(url)
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          user={currentrecord}
          key={currentrecord.id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div className="pt-5">
        <div className="d-flex">
          <h3>Users List</h3>
        </div>
        
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}