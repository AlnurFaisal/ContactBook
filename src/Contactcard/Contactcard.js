import React, { Component } from "react";
import { Media, Card, CardFooter, CardBody, Button } from "reactstrap";

class Contactcard extends Component {
  constructor() {
    super();
  }

  render() {
    const thumbnail = this.props.contact.photo
      ? this.props.src
      : `/img/User_Profile_Picture.jpg`;

    return (
      <Card>
        <CardBody>
          <Media>
            <div className="col-md-3 col-xs-6">
              <Media left>
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className="rounded-circle img-fluid"
                />
              </Media>
            </div>
            <div className="col-md-9 col-xs-6">
              <Media body>
                <Media heading>
                  {this.props.contact.name.firstname}{" "}
                  {this.props.contact.name.lastname}
                </Media>
                <strong>Age:</strong> {this.props.contact.age} <br />
                <strong>Address:</strong> {this.props.contact.address} <br />
                <strong>Phone:</strong> {this.props.contact.phone} <br />
              </Media>
            </div>
          </Media>
        </CardBody>
        <CardFooter>
          <div class="offset-md-9 offset-xs-2 col-md-3 col-xs-5">
            <Button color="primary" onClick={this.props.editContact}>
              Edit
            </Button>{" "}
            <Button color="danger" onClick={this.props.deleteContact}>
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default Contactcard;
