import React, { Component } from "react";
import Axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (email === "") {
      this.setState({ errorMsg: "Email harus diisi" });
    } else if (password === "") {
      this.setState({ errorMsg: "Password harus diisi" });
    } else {
      const data = {
        email,
        password,
      };
      Axios.post("/api/v1/auth/login", data)
        .then((result) => {
          try {
            localStorage.setItem("KEY_TOKEN", result.data.token);
            this.props.history.push("/admin/dashboard");
          } catch (error) {
            console.log("something wrong", error);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            this.setState({ errorMsg: "Email atau password salah" });
          } else {
            alert(
              "Sedang terjadi kesalahan pada server, silahkan coba kembali"
            );
            this.setState({ errorMsg: null });
          }
        });
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("KEY_TOKEN");
    if (token) {
      this.props.history.push("/admin/dashboard");
    } else {
      this.props.history.push("/admin/login");
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form noValidate onSubmit={this.handleLogin}>
                      <h1>Masuk</h1>
                      <p className="text-muted">
                        Silahkan mengisi data akun untuk masuk
                      </p>
                      <p style={{ color: "red" }}>{this.state.errorMsg}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-envelope-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          type="email"
                          placeholder="Email"
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            onClick={this.handleLogin}
                            color="primary"
                            className="px-4"
                          >
                            Masuk
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>I-RURAL</h2>
                      <p>
                        Selamat datang di admin dashboard untuk layanan I-RURAL,
                        silahkan masuk sebagai admin.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
