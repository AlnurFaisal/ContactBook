import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { base } from "./configFirebase";
import Contactcard from "./Contactcard/Contactcard";
import Addcontact from "./Addcontact/Addcontact";
import { SpinLoader } from "react-css-loaders";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      showError: false,
      counter: 0
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
      if (this.hasContacts()) {
        if (this.state.contacts.length !== 0) {
          return this.state.contacts.map((element, i) => {
            return (
              <Contactcard
                contact={element}
                index={i}
                key={i}
                editContact={this.editContact.bind(this)}
                deleteContact={this.deleteContact.bind(this)}
              />
            );
          });
        } else {
          return <SpinLoader color="#4CAF50" size="7" />;
        }
      }
      return <div />;
    }
  }

  hasContacts() {
    return Array.isArray(this.state.contacts);
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
