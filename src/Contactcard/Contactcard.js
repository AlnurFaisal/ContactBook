import React, { Component } from "react";
import { Media, Card, CardFooter, CardBody } from "reactstrap";

class Contactcard extends Component {
  constructor() {
    super();
  }

  render() {
    const thumbnail = this.props.src
      ? this.props.src
      : `/img/User_Profile_Picture.jpg`;

    return (
      <Card>
        <CardBody>
          <Media>
            <div class="col-md-3 col-xs-6">
              <Media left>
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  class="rounded-circle img-fluid"
                />
              </Media>
            </div>
            <div class="col-md-9 col-xs-6">
              <Media body>
                <Media heading>Media heading</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </div>
          </Media>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    );
  }
}

export default Contactcard;
