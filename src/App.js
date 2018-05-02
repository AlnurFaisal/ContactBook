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
      addnew: false
    };

    this.handleClick.bind(this);
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
    if (this.state.addnew !== false) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 align="center" className="display-2">
                Contact Book
              </h1>
              <Addcontact />
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
              <Button color="success" onClick={e => this.handleClick(e)}>
                <i className="fas fa-plus" />
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      addnew: true
    });
  }
  addContact() {}
  editContact() {}
  deleteContact() {}
}

export default App;
