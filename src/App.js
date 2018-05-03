import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { base } from "./configFirebase";
import Contactcard from "./Contactcard/Contactcard";
import Addcontact from "./Addcontact/Addcontact";
import { Button } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      addnew: false,
      showError: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.showError = this.showError.bind(this);
  }

  componentWillMount() {
    this.contactsRef = base.syncState("contacts", {
      context: this,
      state: "contacts"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.contactsRef);
  }

  render() {
    if (this.state.addnew) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 align="center" className="display-2">
                Contact Book
              </h1>
              <Addcontact
                handleClick={this.handleClick}
                showError={this.showError}
              />
              <br />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8 col-xs-12">
              <h1 align="center" className="display-2">
                Contact Book
              </h1>
              {this.state.contacts.map((element, i) => {
                return (
                  <Contactcard
                    contact={element}
                    index={i}
                    key={i}
                    editContact={this.editContact.bind(this)}
                    deleteContact={this.deleteContact.bind(this)}
                  />
                );
              })}
            </div>
            <div className="col-md-2 col-xs-12">
              <br />
              <br />
              <Button color="success" onClick={this.handleClick}>
                <i className="fas fa-plus" />
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
  handleClick() {
    const addnew = this.state.addnew;
    if (!addnew) {
      this.setState({
        addnew: true
      });
    } else {
      this.setState({
        addnew: false
      });
    }
  }

  showError() {
    this.setState({
      showError: true
    });
  }

  editContact() {}
  deleteContact() {}
}

export default App;
