import Login from "./pages/login";
import Home from "./pages/Home";
import { Fragment } from "react";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  handleLogged = () => {
    this.setState({
      status: !this.state.status,
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.status || localStorage.getItem("apiKey") ? (
          <Home />
        ) : (
          <Login onHandleLogged={this.handleLogged} />
        )}
      </Fragment>
    );
  }
}

export default App;
