import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { base } from "./configFirebase";
import Contactcard from "./Contactcard/Contactcard";
import Addcontact from "./Addcontact/Addcontact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      showError: false
    };
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

  hasContacts() {
    return Array.isArray(this.state.contacts);
  }

  render() {
    if (this.props.addnew) {
      return (
        <Addcontact
          handleClick={this.props.handleClick}
          showError={this.showError}
          contactsLength={this.state.contacts.length}
        />
      );
    } else {
      return (
        this.hasContacts() &&
        this.state.contacts.map((element, i) => {
          return (
            <Contactcard
              contact={element}
              index={i}
              key={i}
              editContact={this.editContact.bind(this)}
              deleteContact={this.deleteContact.bind(this)}
            />
          );
        })
      );
    }
  }

  showError() {
    this.setState({
      showError: !this.state.showError
    });
  }

  editContact() {}
  deleteContact() {}
}

export default App;
