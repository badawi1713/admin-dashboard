import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">500</h1>
                <h4 className="pt-3">Terjadi Kesalahan pada Server</h4>
                <p className="text-muted ">
                  Halaman yang anda cari sedang tidak tersedia, silahkan muat
                  ulang kembali browser anda.
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
