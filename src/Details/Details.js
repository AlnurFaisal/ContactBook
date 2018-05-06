import React, { Component } from "react";
import { Media, Button, Form, FormGroup, Input } from "reactstrap";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstname,
      lastName: this.props.lastname,
      age: this.props.age,
      gender: this.props.gender,
      address: this.props.address,
      phone: this.props.phone
    };
  }

  render() {
    if (this.props.showEdit) {
      return (
        <Media body>
          <Form onSubmit={this.handleSubmit}>
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
      );
    } else {
      return (
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
      );
    }
  }
}

export default Details;
