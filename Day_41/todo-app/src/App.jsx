import Login from "./pages/Login";
import Home from "./pages/Home";
import { Fragment } from "react";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      userName: "",
    };
  }
  handleLogged = (name = "") => {
    this.setState({
      status: !this.state.status,
      userName: name,
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.status || localStorage.getItem("apiKey") ? (
          <Home name={this.state.userName} onHandleLogged={this.handleLogged} />
        ) : (
          <Login onHandleLogged={this.handleLogged} />
        )}
      </Fragment>
    );
  }
}

export default App;
