import React, { Component } from "react";

class HelloWorld extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("http://localhost:3500")
    .then((response) => response.text())
    .then((data) => this.setState({ message: data }))
    .catch((error) => console.error(error));
  }

  render() {
    const { message } = this.state;
    console.log("test:", message);
    return <h1>{message}</h1>;
  }
}

export default HelloWorld;
