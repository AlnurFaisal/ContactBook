import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { base } from "./configFirebase";
import Contactcard from "./Contactcard/Contactcard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
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
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 col-xs-12">
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
        </div>
      </div>
    );
  }

  editContact() {}
  deleteContact() {}
}

export default App;
