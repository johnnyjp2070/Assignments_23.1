import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

var users = [
  {
    name: "Raina",
    age: 30
  },
  {
    name: "MSD",
    age: 37
  },
  {
    name: "Kohli",
    age: 30
  },
  {
    name: "Kartik",
    age: 33
  },
  {
    name: "Jadeja",
    age: 29
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="userlist">
          <UserList name={users[0].name} age={users[0].age} />
          <UserList name={users[1].name} age={users[1].age} />
          <UserList name={users[2].name} age={users[2].age} />
          <UserList name={users[3].name} age={users[3].age} />
          <UserList name={users[4].name} age={users[4].age} />
        </div>
      </div>
    );
  }
}

function UserList(props) {
  return (
    <h2>
      Name:{props.name} - Age:{props.age}
    </h2>
  );
}

export default App;
