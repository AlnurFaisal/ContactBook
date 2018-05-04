import React, { Component } from "react";
import App from "./App";
import { Button } from "reactstrap";

class AppParent extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10 col-xs-12">
            <h1 align="center" className="display-2">
              Contact Book
            </h1>
            <App handleClick={this.handleClick} addnew={this.state.addnew} />
            <div className="col-md-2 col-xs-12">
              <br />
              <br />
              <Button color="success" onClick={this.handleClick}>
                Add New Contact <i className="fas fa-plus" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick() {
    this.setState({
      addnew: !this.state.addnew
    });
  }
}

export default AppParent;
