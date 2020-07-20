import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "./ISP.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  border-color: #20a8d8;
  margin-right: 6px;
`;

class ISP extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      isLoading: false,
    };
  }

  getFile = () => {
    this.setState({ isLoading: true });
    const token = localStorage.getItem("KEY_TOKEN");

    Axios.get("/api/v1/customer/files", {
      headers: {
        token: token,
        SECRET: "secret",
      },
    })
      .then((res) => {
        if (this._isMounted) {
          this.setState({
            file: res.data.data,
          });
          this.setState({ isLoading: false });
        }
      })
      .catch((error) => {
        this.setState({ isLoading: false });

        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem("KEY_TOKEN");
          this.props.history.push("/admin/unauthorized");
        }
      });
  };

  componentDidMount = async () => {
    this._isMounted = true;
    await this.getFile();
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const isp = this.props.location.isp_data;
    // const registrationTime = this.props.location.createdAt;
    const fileList = this.state.file.filter(
      (file) => file.customer_register_id === isp.id
    );

    if (isp === undefined) {
      return <Redirect to="/admin/dashboard" />;
    }

    const redirectMaps = () => {
      window.open(
        `https://maps.google.com/maps?z=7&q=${isp.location.coordinates[0]},${isp.location.coordinates[1]}`
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
                  <i className="icon-info pr-2"></i>ISP ID:{" "}
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
                      <td>Nama ISP</td>
                      <td>
                        <strong>{isp.isp_name}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Contact Person</td>
                      <td>
                        <strong>{isp.isp_contact_person_name}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Contact Person Number</td>
                      <td>
                        <strong>{isp.isp_contact_number}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Alamat ISP</td>
                      <td>
                        <strong>{isp.isp_address}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Kelurahan</td>
                      <td>
                        <strong>{isp.urbanVillage}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Kecamatan</td>
                      <td>
                        <strong>{isp.sub_district}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Provinsi</td>
                      <td>
                        <strong>{isp.province}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Kode Pos</td>
                      <td>
                        <strong>{isp.zip_code}</strong>
                      </td>
                    </tr>

                    <tr>
                      <td>Lokasi</td>
                      <td>
                        {isp.location === null ? (
                          <strong>Tidak ada informasi lokasi</strong>
                        ) : (
                          <strong
                            className="map-url"
                            onClick={() => redirectMaps()}
                          >
                            https://maps.google.com/maps?z=7&q=
                            {isp.location.coordinates[0]},
                            {isp.location.coordinates[1]}
                          </strong>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="align-items-center mt-3">
                  <Col col="12" xl className="mb-3 mb-xl-0">
                    {!this.state.isLoading ? (
                      fileList.map((file, index) => (
                        <Button
                          style={{ marginRight: 10, marginBottom: 5 }}
                          key={index}
                          color="primary"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://irural.id/upload/" +
                                file.file_url.substring(14),
                              "_blank"
                            );
                          }}
                        >
                          <i className="fa fa-download"></i>&nbsp;Unduh Berkas{" "}
                          {index + 1}
                        </Button>
                      ))
                    ) : (
                      <div className="loading-info">
                        <ClipLoader
                          css={override}
                          size={20}
                          color={"#20A8D8"}
                          loading={this.state.isLoading}
                        />
                        Memuat Berkas ...
                      </div>
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ISP;
