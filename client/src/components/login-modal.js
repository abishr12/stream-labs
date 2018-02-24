import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.youtubeAuth = this.youtubeAuth.bind(this);
    this.googleAuth = this.googleAuth.bind(this);
  }

  youtubeAuth() {
    console.log("Youtube Login");
  }

  googleAuth() {
    console.log("Google Login");
  }

  render() {
    return (
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            Welcome To Stream Labs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} xsOffset={3}>
              <Button
                onClick={this.youtubeAuth}
                className="sign-up-button"
                bsStyle="danger"
              >
                {" "}
                Sign Up With <i className="fa fa-youtube" />{" "}
              </Button>
            </Col>
            <br />
            <Col md={6} xsOffset={3}>
              <Link to="/auth/google">
                {" "}
                <Button
                  onClick={this.googleAuth}
                  className="sign-up-button"
                  bsStyle="success"
                >
                  Sign In With <i className="fa fa-google" />
                </Button>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModal;
