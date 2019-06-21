import React, { Component } from "react";
// import {  FlatList, View } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: JSON.parse(localStorage.getItem("users"))
    };
  }


  render() {
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
