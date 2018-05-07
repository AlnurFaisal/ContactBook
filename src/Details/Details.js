import React, { Component } from "react";
import { Media, Button, Form, FormGroup, Input } from "reactstrap";
import { storage } from "../configFirebase";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myphoto: "",
      firstName: this.props.firstname,
      lastName: this.props.lastname,
      age: this.props.age,
      gender: this.props.gender,
      address: this.props.address,
      phone: this.props.phone
    };
    this.renderImage = this.renderImage.bind(this);
    this.storageRef = storage.ref();
    this.handleChangefirst = this.handleChangefirst.bind(this);
    this.handleChangelast = this.handleChangelast.bind(this);
    this.handleChangeage = this.handleChangeage.bind(this);
    this.handleChangegender = this.handleChangegender.bind(this);
    this.handleChangeaddress = this.handleChangeaddress.bind(this);
    this.handleChangephone = this.handleChangephone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    if (this.props.showEdit) {
      return (
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <Media left>
              <img
                src={this.renderImage()}
                alt="thumbnail"
                className="img-fluid"
              />
              <br />
              <br />
              <Button
                color="primary"
                onClick={this.togglePopup}
                size="lg"
                block
              >
                Edit Photo
              </Button>
            </Media>
          </div>
          <div className="col-md-8 col-xs-6">
            <Media body>
              <Form
                onSubmit={event => this.handleSubmit(this.props.index, event)}
              >
                <FormGroup className="mb-2 row">
                  <div className="col-md-6 col-xs-12">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      bsSize="lg"
                      value={this.state.firstName}
                      onChange={this.handleChangefirst}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      bsSize="lg"
                      value={this.state.lastName}
                      onChange={this.handleChangelast}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="mb-1 row">
                  <div className="col-md-12 col-xs-12">
                    <Input
                      type="number"
                      name="age"
                      id="age"
                      bsSize="lg"
                      placeholder="Enter age"
                      value={this.state.age}
                      onChange={this.handleChangeage}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="mb-1 row">
                  <div className="col-md-12 col-xs-12">
                    <Input
                      type="select"
                      name="gender"
                      id="gender"
                      bsSize="lg"
                      value={this.state.gender}
                      onChange={this.handleChangegender}
                    >
                      <option value="Select">Select one</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Input>
                  </div>
                </FormGroup>
                <FormGroup className="mb-1 row">
                  <div className="col-md-12 col-xs-12">
                    <Input
                      type="textarea"
                      name="address"
                      id="address"
                      placeholder="Enter address"
                      bsSize="lg"
                      value={this.state.address}
                      onChange={this.handleChangeaddress}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="mb-1 row">
                  <div className="col-md-12 col-xs-12">
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter phone"
                      bsSize="lg"
                      value={this.state.phone}
                      onChange={this.handleChangephone}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="mb-2 row">
                  <div className="col-md-12 col-xs-12">
                    <Button
                      color="success"
                      type="submit"
                      size="lg"
                      value="Submit"
                      block
                    >
                      Update
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </Media>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
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
            <Media body>
              <h2 className="display-4">
                {this.props.firstname} {this.props.lastname}
              </h2>
              <p className="lead">
                <strong>Age:</strong> {this.props.age} <br />
                <strong>Gender:</strong> {this.props.gender} <br />
                <strong>Address:</strong> {this.props.address} <br />
                <strong>Phone:</strong> {this.props.phone} <br />
              </p>
            </Media>
          </div>
        </div>
      );
    }
  }

  handleChangefirst(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleChangelast(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleChangeage(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleChangegender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  handleChangeaddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleChangephone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handleSubmit(index, event) {
    event.preventDefault();
    this.props.editContact(
      index,
      this.state.firstName,
      this.state.lastName,
      this.state.age,
      this.state.gender,
      this.state.address,
      this.state.phone
    );
    this.props.hideEdit();
  }

  renderImage() {
    const path = "/img/profile/";
    const firebasePath = `images/profile/${this.props.photo}`;
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
    const thumbnail = this.props.photo
      ? `${this.state.myphoto}`
      : `${path}User_Profile_Picture.jpg`;

    return thumbnail;
  }
}

export default Details;
