import React, { Component } from "react";
import { Media, Card, CardFooter, CardBody, Button } from "reactstrap";
import { storage } from "../configFirebase";

class Contactcard extends Component {
  constructor() {
    super();
    this.state = {
      myphoto: ""
    };
    this.storageRef = storage.ref();
  }

  render() {
    const path = "/img/profile/";
    const firebasePath = `images/profile/${this.props.contact.photo}`;
    let { state } = this;
    this.storageRef
      .child(firebasePath)
      .getDownloadURL()
      .then(url => {
        state.myphoto = url;
        this.setState(state);
      })
      .catch(err => {
        console.log("err");
      });
    const thumbnail = this.props.contact.photo
      ? `${this.state.myphoto}`
      : `${path}User_Profile_Picture.jpg`;

    return (
      <div>
        <Card>
          <CardBody>
            <Media>
              <div className="col-md-3 col-xs-6">
                <Media left>
                  <img src={thumbnail} alt="thumbnail" className="img-fluid" />
                </Media>
              </div>
              <div className="col-md-8 col-xs-6">
                <Media body>
                  <h2 className="display-4">
                    {this.props.contact.name.firstname}{" "}
                    {this.props.contact.name.lastname}
                  </h2>
                  <p className="lead">
                    <strong>Age:</strong> {this.props.contact.age} <br />
                    <strong>Gender:</strong> {this.props.contact.gender} <br />
                    <strong>Address:</strong> {this.props.contact.address}{" "}
                    <br />
                    <strong>Phone:</strong> {this.props.contact.phone} <br />
                  </p>
                </Media>
              </div>
            </Media>
          </CardBody>
          <CardFooter>
            <div className="offset-md-9 offset-xs-2 col-md-3 col-xs-5">
              <Button color="primary" onClick={this.props.editContact}>
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
}

export default Contactcard;
