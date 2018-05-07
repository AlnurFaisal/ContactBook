import React, { Component } from "react";
import { Media, Card, CardFooter, CardBody, Button } from "reactstrap";
import Details from "../Details/Details.js";

class Contactcard extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false
    };
    this.showEdit = this.showEdit.bind(this);
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Media>
              <div className="col-md-12 col-xs-12">
                <Details
                  photo={this.props.contact.photo}
                  showEdit={this.state.showEdit}
                  editContact={this.props.editContact}
                  firstname={this.props.contact.name.firstname}
                  lastname={this.props.contact.name.lastname}
                  age={this.props.contact.age}
                  gender={this.props.contact.gender}
                  address={this.props.contact.address}
                  phone={this.props.contact.phone}
                  index={this.props.index}
                  hideEdit={this.showEdit.bind(this)}
                />
              </div>
            </Media>
          </CardBody>
          <CardFooter>
            <div className="offset-md-9 offset-xs-2 col-md-3 col-xs-5">
              <Button color="primary" onClick={this.showEdit}>
                Edit
              </Button>{" "}
              <Button color="danger" onClick={this.props.deleteContact}>
                Delete
              </Button>
            </div>
          </CardFooter>
        </Card>
        <br />
      </div>
    );
  }

  showEdit() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }
}

export default Contactcard;
