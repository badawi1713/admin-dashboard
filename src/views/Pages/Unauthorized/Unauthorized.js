import React, { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Timeout extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">401</h1>
                <h4 className="pt-3">
                  Oops! Sepertinya sesi anda telah berakhir atau anda tidak
                  berhak mengakses halaman ini.
                </h4>
                <p className="text-muted float-left">
                  Silahkan login kembali untuk dapat mengakses halaman
                  dashboard.
                </p>
              </div>
            </Col>
            <Col md="12">
              <center></center>
            </Col>
            <Link to="/admin/login">
              <Button size="lg" color="info">
                Login
              </Button>
            </Link>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Timeout;
