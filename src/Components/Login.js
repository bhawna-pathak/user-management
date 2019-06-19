import React, { Component } from "react";
// import {  FlatList, View } from "react";

class Login extends Component {
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
    this.checkDataInLocalStorage(this.state);
    event.preventDefault();
  }

  checkDataInLocalStorage(data) {
    let clientsArr = JSON.parse(localStorage.getItem("users"));
    let found = clientsArr.some(el => {
      if (el.name === data.name && el.password === data.password) {
        return true;
      } else {
        return false;
      }
    });
    if (found) {
      console.log("Logged In");
    } else {
      console.log("Invalid User");
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
