import React, { Component } from "react";
import { Media, Card, CardFooter, CardBody, Button } from "reactstrap";
import { storage } from "../configFirebase";
import Details from "../Details/Details.js";

class Contactcard extends Component {
  constructor() {
    super();
    this.state = {
      myphoto: "",
      showEdit: false
    };
    this.storageRef = storage.ref();
    this.showEdit = this.showEdit.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Media>
              <div className="col-md-3 col-xs-6">
                <Media left>
                  <img
                    src={this.renderImage()}
                    alt="thumbnail"
                    className="img-fluid"
                  />
                </Media>
              </div>
              <div className="col-md-8 col-xs-6">
                <Details
                  showEdit={this.state.showEdit}
                  editContact={this.props.editContact}
                  firstname={this.props.contact.name.firstname}
                  lastname={this.props.contact.name.lastname}
                  age={this.props.contact.age}
                  gender={this.props.contact.gender}
                  address={this.props.contact.address}
                  phone={this.props.contact.phone}
                  index={this.props.index}
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

  renderImage() {
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
        console.log(err);
      });
    const thumbnail = this.props.contact.photo
      ? `${this.state.myphoto}`
      : `${path}User_Profile_Picture.jpg`;

    return thumbnail;
  }
}

export default Contactcard;
