import React from 'react';
import './App.css';
// import UserList from '../src/Components/UserList';
import Register from '../src/Components/Register';
// import Login from '../src/Components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UserList/> */}
        <Register/>
        {/* <Login/> */}
      </header>
    </div>
  );
}

export default App;
