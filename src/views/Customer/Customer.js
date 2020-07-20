import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { Redirect } from "react-router-dom";
import "./Customer.css";

class Customer extends Component {
  render() {
    const customer = this.props.location.customer_data;
    // const registrationTime = this.props.location.createdAt;

    if (customer === undefined) {
      return <Redirect to="/admin/dashboard" />;
    }

    const redirectMaps = () => {
      window.open(
        `https://maps.google.com/maps?z=7&q=${customer.location.coordinates[0]},${customer.location.coordinates[1]}`
      );
      return null;
    };

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1"></i>Customer ID:{" "}
                  {this.props.match.params.id}
                </strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {/* <tr>
                      <td>Tanggal Daftar</td>
                      <td>
                        <strong>{registrationTime}</strong>
                      </td>
                    </tr> */}
                    <tr>
                      <td>Nama</td>
                      <td>
                        <strong>{customer.name}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Nomor Telepon</td>
                      <td>
                        <strong>{customer.contact_number}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Nomor KTP</td>
                      <td>
                        <strong>{customer.identity_number}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>
                        <strong>{customer.email}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td>
                        <strong>{customer.address}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Kelurahan</td>
                      <td>
                        <strong>{customer.urbanVillage}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Kecamatan</td>
                      <td>
                        <strong>{customer.sub_district}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Provinsi</td>
                      <td>
                        <strong>{customer.province}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Kode Pos</td>
                      <td>
                        <strong>{customer.zip_code}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Lokasi</td>
                      <td>
                        {customer.location === null ? (
                          <strong>Tidak ada informasi lokasi</strong>
                        ) : (
                          <strong
                            className="map-url"
                            onClick={() => redirectMaps()}
                          >
                            https://maps.google.com/maps?z=7&q=
                            {customer.location.coordinates[0]},
                            {customer.location.coordinates[1]}
                          </strong>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Customer;
