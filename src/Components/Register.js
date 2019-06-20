import React, { Component } from "react";
// import {  FlatList, View } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", confirmPassword: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.SaveDataToLocalStorage(this.state);
    event.preventDefault();
  }

  SaveDataToLocalStorage(data) {
    let clientsArr = JSON.parse(localStorage.getItem("users")) || [];
    console.log(data);
    const { length } = clientsArr;
    const id = length + 1;
    data.id = id;
    clientsArr.push(data);
    // if(data)
    localStorage.setItem("users", JSON.stringify(clientsArr));
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Register;
