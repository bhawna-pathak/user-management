import React from "react";
import "./App.css";
import UserList from "../src/Components/UserList";
import Register from "../src/Components/Register";
import Login from "../src/Components/Login";
import OthUsers from "../src/Components/OthUsers";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={UserList} />
          <Route path="/list" component={OthUsers} />
        </Router>
      </header>
    </div>
  );
}

export default App;
