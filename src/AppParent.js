import React, { Component } from "react";
import App from "./App";
import { Button, Alert } from "reactstrap";

class AppParent extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      errorMsg: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <Alert
              color="danger"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              {this.state.errorMsg}
            </Alert>
          </div>
          <div className="offset-md-1 col-md-10 col-xs-12">
            <h1 align="center" className="display-2">
              Contact Book
            </h1>
            <div className="offset-md-3 col-md-6 col-xs-12">
              <br />
              <Button
                color="success"
                size="lg"
                onClick={this.handleClick}
                block
              >
                Add New Contact <i className="fas fa-plus" />
              </Button>
              <br />
            </div>
            <App
              handleClick={this.handleClick}
              addnew={this.state.addnew}
              toggleShow={this.toggleShow.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  toggleShow(msg) {
    this.setState({
      visible: !this.state.visible,
      errorMsg: msg
    });
  }

  handleClick() {
    this.setState({
      addnew: !this.state.addnew
    });
  }
}

export default AppParent;
