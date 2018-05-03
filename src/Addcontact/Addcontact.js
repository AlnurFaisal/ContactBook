import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Addcontact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      address: "",
      phone: "",
      selectedFile: null
    };

    this.handleChangefirst.bind(this);
    this.handleChangelast.bind(this);
    this.handleChangeage.bind(this);
    this.handleChangegender.bind(this);
    this.handleChangeaddress.bind(this);
    this.handleChangephone.bind(this);
    this.handleSubmit.bind(this);
    this.fileChangedHandler.bind(this);
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h4>
            <strong>Add New Contact</strong>
          </h4>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="mb-2 row">
              <Label for="firstName" className="col-md-2 col-xs-12">
                <h4>First Name:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
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
            </FormGroup>
            <FormGroup className="mb-2 row">
              <Label for="lastName" className="col-md-2 col-xs-12">
                <h4>Last Name:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
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
            <FormGroup className="mb-2 row">
              <Label for="age" className="col-md-2 col-xs-12">
                <h4>Age:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter age"
                  bsSize="lg"
                  value={this.state.age}
                  onChange={this.handleChangeage}
                />
              </div>
            </FormGroup>
            <FormGroup className="mb-2 row">
              <Label for="gender" className="col-md-2 col-xs-12">
                <h4>Gender:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
                <Input
                  type="select"
                  name="gender"
                  id="gender"
                  bsSize="lg"
                  value={this.state.gender}
                  onChange={this.handleChangegender}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Input>
              </div>
            </FormGroup>
            <FormGroup className="mb-2 row">
              <Label for="address" className="col-md-2 col-xs-12">
                <h4>Address:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
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
            <FormGroup className="mb-2 row">
              <Label for="phone" className="col-md-2 col-xs-12">
                <h4>Phone:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
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
              <Label for="photo" className="col-md-2 col-xs-12">
                <h4>Photo:</h4>
              </Label>
              <div className="col-md-10 col-xs-12">
                <Input
                  type="file"
                  name="file"
                  id="photo"
                  onChange={this.fileChangedHandler}
                  accept=".jpg,.png,.jpeg"
                />
                <FormText color="muted">
                  File should not be bigger than 2MB. Only .jpg .png .jpeg are
                  allowed.
                </FormText>
              </div>
            </FormGroup>
            <br />
            <FormGroup className="mb-2 row">
              <div className="offset-md-2 col-md-10 col-xs-12">
                <Button
                  color="success"
                  size="lg"
                  type="submit"
                  value="Submit"
                  block
                >
                  Create New Contact
                </Button>
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
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

  fileChangedHandler(e) {
    this.setState({
      selectedFile: e.target.files[0]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
}

export default Addcontact;
