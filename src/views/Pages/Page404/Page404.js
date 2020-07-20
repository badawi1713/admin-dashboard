import React, { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! Halaman anda tidak ditemukan.</h4>
                <p className="text-muted float-left">
                  Halaman yang anda cari tidak ditemukan, silahkan tekan tombol
                  kembali.
                </p>
              </div>
            </Col>
            <Col md="12">
              <center>
                <Link to="/admin/login">
                  <Button size="lg" color="info">
                    Kembali
                  </Button>
                </Link>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;
