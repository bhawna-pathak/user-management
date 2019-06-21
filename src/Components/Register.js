import React, { Component } from "react";
import Login from "../Components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      isRegistered: false
    };
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
    let found = clientsArr.some(el => {
      if (el.name === data.name && el.password === data.password) {
        return true;
      } else {
        return false;
      }
    });
    if (!found) {
      const { length } = clientsArr;
      const id = length + 1;
      data.id = id;
      clientsArr.push(data);
      this.setState({ isRegistered: true });
      localStorage.setItem("users", JSON.stringify(clientsArr));
    } else {
      this.setState({ isRegistered: false });
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/login" exact component={Login} />
        </Router>
        <h2>Register</h2>
        <Link to="/">Back</Link>

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
        <Greeting isRegistered={this.state.isRegistered} />
      </div>
    );
  }
}

function Greeting(props) {
  const isRegistered = props.value;
  if (isRegistered) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export default Register;
