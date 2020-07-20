import React, { Component } from "react";
import { Card, CardBody, Col, Container, Jumbotron, Row } from "reactstrap";
import Widget04 from "../Widgets/Widget04";
import Axios from "axios";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #20a8d8;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      customerData: 0,
      ispData: 0,
      isLoading: false,
    };
  }

  getIspData = () => {
    this.setState({ isLoading: true });
    const token = localStorage.getItem("KEY_TOKEN");
    Axios.get("/api/v1/customer/ISPs", {
      headers: {
        token: token,
        SECRET: "secret",
      },
    })
      .then((res) => {
        this.setState({ isLoading: false });
        this.setState({ ispData: res.data.data.count });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem("KEY_TOKEN");
          this.props.history.push("/admin/unauthorized");
        }
        this.setState({ isLoading: false });
      });
  };

  getCustomersData = () => {
    const token = localStorage.getItem("KEY_TOKEN");
    Axios.get("/api/v1/customer/customers", {
      headers: {
        token: token,
        SECRET: "secret",
      },
    })
      .then((res) => {
        this.setState({ customerData: res.data.data.count });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem("KEY_TOKEN");
          this.props.history.push("/admin/unauthorized");
        }
      });
  };

  componentDidMount = async () => {
    await this.getCustomersData();
    await this.getIspData();
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        {this.state.isLoading ? (
          <div className="text-center">
            <ClipLoader
              css={override}
              size={20}
              color={"#20A8D8"}
              loading={this.state.isLoading}
            />
            Memuat Halaman
          </div>
        ) : (
          <div>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Jumbotron fluid>
                      <Container fluid>
                        <h1 className="display-3">Selamat Datang</h1>
                        <p className="lead">
                          Situs ini merupakan halaman dasboard untuk admin,
                          supaya admin dapat melihat rekapan data customer dan
                          data ISP yang terdaftar untuk mendapatkan layanan
                          I-RURAL.
                        </p>
                      </Container>
                    </Jumbotron>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6" lg="6">
                <Widget04
                  icon="icon-people"
                  color="info"
                  header={this.state.customerData.toString()}
                  invert
                >
                  Jumlah Customer Terdaftar
                </Widget04>
              </Col>

              <Col xs="12" sm="6" lg="6">
                <Widget04
                  icon="icon-feed"
                  color="primary"
                  header={this.state.ispData.toString()}
                  invert
                >
                  Jumlah ISP Terdaftar
                </Widget04>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
