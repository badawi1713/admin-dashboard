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

function CustomerRow(props) {
  const index = props.number;
  const customer = props.customer;
  const customerLink = `/admin/customers/${customer.id}`;

  return (
    <tr key={customer.id.toString()}>
      <td>{index}</td>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.contact_number}</td>
      <td>{customer.identity_number}</td>
      <td>{customer.sub_district}</td>
      <td>{customer.province}</td>

      {/* <td>{customer.createdAt}</td> */}
      <td>
        <Link
          to={{
            pathname: customerLink,
            customer_data: customer,
            // createdAt: customer.createdAt,
          }}
        >
          Detail
        </Link>
      </td>
    </tr>
  );
}

const token = localStorage.getItem("KEY_TOKEN");
class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: [],
      customerPaginationData: [],
      isLoading: false,
      isSearchLoading: false,
      currentPage: 1,
      totalPages: null,
      limit: 50,
      searchQuery: "",
      customerSearchData: [],
      onSearch: false,
    };
  }

  headers = [
    { label: "Nama", key: "name" },
    { label: "Alamat", key: "address" },
    { label: "Email", key: "email" },
    { label: "Nomor KTP", key: "identity_number" },
    { label: "Nomor Telepon", key: "contact_number" },
    { label: "Provinsi", key: "province" },
    { label: "Kecamatan", key: "sub_district" },
    { label: "Kelurahan", key: "urbanVillage" },
    { label: "Kode Pos", key: "zip_code" },
    // { label: "Tanggal daftar", key: "createdAt" },
  ];

  componentDidMount = async () => {
    await this.getCustomersData();
    await this.getCustomerPaginationData();
    await this.getCustomerSearchData();
  };

  handleSearchInput = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    this.setState({ searchQuery: searchQuery });
  };

  getCustomerSearchData = async (searchQuery) => {
    this.setState({ isSearchLoading: true });

    try {
      const response = await Axios.get(
        `/api/v1/customer/search/customers?search=${searchQuery}`,
        {
          headers: {
            token: token,
            SECRET: "secret",
          },
        }
      );
      this.setState({ isSearchLoading: false });

      this.setState({ customerSearchData: response.data.data });
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

  getCustomerPaginationData = async (currentPage = 1) => {
    const { limit } = this.state;

    try {
      const response = await Axios.get(
        `/api/v1/customer/customers?limit=${limit}&page=${currentPage}`,
        {
          headers: {
            token: token,
            SECRET: "secret",
          },
        }
      );
      this.setState({ customerPaginationData: response.data.data.rows });
      this.setState({ totalPages: response.data.data.count });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("KEY_TOKEN");
        this.props.history.push("/admin/unauthorized");
      }
    }
  };

  getCustomersData = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await Axios.get(`/api/v1/customer/customer`, {
        headers: {
          token: token,
          SECRET: "secret",
        },
      });
      this.setState({ isLoading: false });
      this.setState({ customerData: response.data.data });
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
    const {
      customerData,
      customerPaginationData,
      customerSearchData,
      onSearch,
    } = this.state;
    const data = customerData;

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
                    <b>Data Customer Terdaftar</b>
                    {customerData.length < 1 ? null : (
                      <div className="card-header-actions">
                        <CSVLink
                          filename="data_customer_i-rural.csv"
                          data={data}
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
                        this.getCustomerSearchData(value.trim());
                      }}
                    />
                  </div>
                  {!onSearch ? (
                    customerData.length < 1 ? (
                      <p>Data Kosong</p>
                    ) : (
                      <div>
                        <Table striped responsive hover>
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama</th>
                              <th scope="col">Email</th>
                              <th scope="col">Nomor Telepon</th>
                              <th scope="col">Nomor KTP</th>
                              <th scope="col">Kecamatan</th>
                              <th scope="col">Provinsi</th>

                              {/* <th scope="col">Tanggal Daftar</th> */}
                              <th scope="col">Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {customerPaginationData.map((customer, index) => (
                              <CustomerRow
                                number={index + 1}
                                key={index}
                                customer={customer}
                              />
                            ))}
                          </tbody>
                        </Table>
                        <div>
                          <Pagination
                            activePage={this.state.currentPage}
                            totalItemsCount={this.state.customerData.length}
                            itemsCountPerPage={this.state.limit}
                            onChange={(currentPage) => {
                              this.setState({ currentPage: currentPage });
                              this.getCustomerPaginationData(currentPage);
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
                  ) : customerSearchData.length < 1 ? (
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
                        {customerSearchData.map((customer, index) => (
                          <CustomerRow
                            number={index + 1}
                            key={index}
                            customer={customer}
                          />
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

export default Customers;
