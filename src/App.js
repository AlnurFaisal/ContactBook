import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { base } from "./configFirebase";
import Contactcard from "./Contactcard/Contactcard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: {}
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
      <div class="container">
        <div class="row">
          <div class="offset-md-2 col-md-8 col-xs-12">
            <Contactcard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
