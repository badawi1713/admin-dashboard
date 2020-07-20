import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import Pagination from "react-js-pagination";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "reactstrap";
import Axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #20a8d8;
`;

function ISPRow(props) {
  const index = props.number;
  const isp = props.isp;
  const ispLink = `/admin/isp/${isp.id}`;

  return (
    <tr key={isp.id.toString()}>
      <th scope="row">{index}</th>
      <td>{isp.isp_name}</td>
      <td>{isp.isp_email}</td>
      <td>{isp.isp_contact_number}</td>
      <td>{isp.isp_contact_person_name}</td>
      <td>{isp.sub_district}</td>
      <td>{isp.province}</td>
      {/* <td>{isp.createdAt}</td> */}
      <td>
        <Link
          to={{
            pathname: ispLink,
            isp_data: isp,
            // createdAt: isp.createdAt,
          }}
        >
          Detail
        </Link>
      </td>
    </tr>
  );
}
const token = localStorage.getItem("KEY_TOKEN");

class ISPs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ispData: [],
      ispPaginationData: [],
      isLoading: false,
      currentPage: 1,
      totalPages: null,
      limit: 50,
      searchQuery: "",
      ispSearchData: [],
      onSearch: false,
    };
  }

  headers = [
    { label: "Nama ISP", key: "isp_name" },
    { label: "Alamat ISP", key: "isp_address" },
    { label: "Email", key: "isp_email" },
    { label: "Contact Person", key: "isp_contact_person_name" },
    { label: "Nomor Telepon ISP", key: "isp_contact_number" },
    { label: "Provinsi", key: "province" },
    { label: "Kecamatan", key: "sub_district" },
    { label: "Kelurahan", key: "urbanVillage" },
    { label: "Kode Pos", key: "zip_code" },
    // { label: "Tanggal daftar", key: "createdAt" },
  ];

  componentDidMount = async () => {
    await this.getISPData();
    await this.getIspPaginationData();
    await this.getIspSearchData();
  };

  handleSearchInput = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    this.setState({ searchQuery: searchQuery });
  };

  getIspSearchData = async (searchQuery) => {
    this.setState({ isSearchLoading: true });

    try {
      const response = await Axios.get(
        `/api/v1/customer/search/isp?search=${searchQuery}`,
        {
          headers: {
            token: token,
            SECRET: "secret",
          },
        }
      );
      this.setState({ isSearchLoading: false });

      this.setState({ ispSearchData: response.data.data });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
      if (error.response.status === 401) {
        localStorage.removeItem("KEY_TOKEN");
        this.props.history.push("/admin/unauthorized");
      }
      this.setState({ isSearchLoading: false });
    }
  };

  getIspPaginationData = async (currentPage = 1) => {
    const { limit } = this.state;

    const token = localStorage.getItem("KEY_TOKEN");
    try {
      const response = await Axios.get(
        `/api/v1/customer/ISPs?limit=${limit}&page=${currentPage}`,
        {
          headers: {
            token: token,
            SECRET: "secret",
          },
        }
      );
      this.setState({ ispPaginationData: response.data.data.rows });
      this.setState({ totalPages: response.data.data.count });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("KEY_TOKEN");
        this.props.history.push("/admin/unauthorized");
      }
    }
  };

  getISPData = async () => {
    this.setState({ isLoading: true });
    const token = localStorage.getItem("KEY_TOKEN");
    try {
      const response = await Axios.get("/api/v1/customer/ISP", {
        headers: {
          token: token,
          SECRET: "secret",
        },
      });
      this.setState({ isLoading: false });
      this.setState({ ispData: response.data.data });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("KEY_TOKEN");
        this.props.history.push("/admin/unauthorized");
      }
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { ispData, ispPaginationData, ispSearchData, onSearch } = this.state;
    const ispList = this.state.ispData;

    return (
      <div className="animated fadeIn">
        {this.state.isLoading ? (
          <div className="text-center">
            {" "}
            <ClipLoader
              css={override}
              size={20}
              color={"#20A8D8"}
              loading={this.state.isLoading}
            />
            Memuat Data ...
          </div>
        ) : (
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <b>Data ISP Terdaftar</b>
                    {this.state.ispData.length < 1 ? null : (
                      <div className="card-header-actions">
                        <CSVLink
                          filename="data_ISP_i-rural.csv"
                          data={ispList}
                          headers={this.headers}
                        >
                          <Button className="btn" color="primary">
                            <i className="fa fa-download"></i>&nbsp;Unduh Data
                            CSV
                          </Button>
                        </CSVLink>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="searchQuery"
                      placeholder="Pencarian"
                      style={{ width: "100%", padding: "5px" }}
                      onChange={(e) => {
                        const value = e.target.value.trim();
                        if (/^\s/.test(value) || value === "") {
                          this.setState({ onSearch: false });
                          return false;
                        }
                        this.setState({ onSearch: true });
                        this.getIspSearchData(value.trim());
                      }}
                    />
                  </div>
                  {!onSearch ? (
                    this.state.ispData.length < 1 ? (
                      <p>Data Kosong</p>
                    ) : (
                      <div>
                        <Table striped responsive hover>
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama ISP</th>
                              <th scope="col">Email ISP</th>
                              <th scope="col">Nomor Telepon CP</th>
                              <th scope="col">Contact Person</th>
                              <th scope="col">Kecamatan</th>
                              <th scope="col">Provinsi</th>

                              {/* <th scope="col">Tanggal Daftar</th> */}
                              <th scope="col">Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ispPaginationData.map((isp, index) => (
                              <ISPRow
                                number={index + 1}
                                key={index}
                                isp={isp}
                              />
                            ))}
                          </tbody>
                        </Table>
                        <div>
                          <Pagination
                            activePage={this.state.currentPage}
                            totalItemsCount={ispData.length}
                            itemsCountPerPage={this.state.limit}
                            onChange={(currentPage) => {
                              this.setState({ currentPage: currentPage });
                              this.getIspPaginationData(currentPage);
                            }}
                            itemClass="page-item"
                            linkClass="page-link"
                          />
                        </div>
                      </div>
                    )
                  ) : this.state.isSearchLoading ? (
                    <div className="text-center">
                      {" "}
                      <ClipLoader
                        css={override}
                        size={20}
                        color={"#20A8D8"}
                        loading={this.state.isLoading}
                      />
                      Mencari Data ...
                    </div>
                  ) : ispSearchData.length < 1 ? (
                    <p>Data Tidak Ditemukan</p>
                  ) : (
                    <Table striped responsive hover>
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Nama</th>
                          <th scope="col">Email</th>
                          <th scope="col">Nomor Telepon</th>
                          <th scope="col">Nomor KTP</th>
                          <th scope="col">Kelurahan</th>
                          <th scope="col">Provinsi</th>
                          {/* <th scope="col">Tanggal Daftar</th> */}
                          <th scope="col">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ispSearchData.map((isp, index) => (
                          <ISPRow number={index + 1} key={index} isp={isp} />
                        ))}
                      </tbody>
                    </Table>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default ISPs;
