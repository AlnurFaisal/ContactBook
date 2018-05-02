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
    this.state = {};
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
}

export default Addcontact;
