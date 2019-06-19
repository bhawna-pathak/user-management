import React, { Component } from "react";
// import {  FlatList, View } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.loading) {
      return <p>Loading</p>;
    }
    const listItems = this.state.dataSource.map(item => <li  key={item.id.toString()}>{item.name}</li>);
    return (
        <div>
        <h2>Users</h2>
        <ul data={this.state.dataSource}>
            {listItems}
        </ul>
        </div>
    );
  }
}

export default UserList;
