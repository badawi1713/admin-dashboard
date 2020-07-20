import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";
import PropTypes from "prop-types";

import {
  // AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import logo from "../../assets/img/irural-logo.jpeg";
// import sygnet from "../../assets/img/brand/sygnet.svg";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  handleLogout = (event) => {
    event.preventDefault();
    try {
      localStorage.removeItem("KEY_TOKEN");
    } catch (error) {
      console.log(error);
    }
    this.props.onLogout(event);
  };

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 30, alt: "I-Rural Logo" }}
          // minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <i
                style={{ fontSize: "25px", marginRight: "25px" }}
                className="fa fa-user-circle-o"
              ></i>
              {/* <img
                src={"../../assets/img/avatars/6.jpg"}
                className="img-avatar"
                alt="admin-icon"
                style={{ marginRight: "25px" }}
              /> */}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={(e) => this.handleLogout(e)}>
                <i className="icon-logout"></i> Keluar
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
