import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CollapsableMenu from "./collapsableMenu";
import MediaQuery from "react-responsive";

const navigation = {
  backgroundColor: "snow",
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
};

const menuBackground = {
  paddingLeft: "10%",
  paddingRight: "10%",
  display: "inline-flex",
};

const menuText = {
  margin: "20px",
  textAlign: "center",
  color: "black",
  display: "inline-block",
};

const timeoutLength = 300;
class NavigationBar extends Component {
  state = { isHovering: false, isMenuHovering: false };

  showNavClick = () => {
    let isHovering = this.state.isHovering;
    isHovering = !isHovering;
    this.setState({ isHovering });
  };

  showNav = () => {
    let isHovering = this.state.isHovering;
    isHovering = true;
    this.setState({ isHovering });
  };

  hideNav = () => {
    setTimeout(() => {
      let isHovering = this.state.isHovering;
      isHovering = false;
      this.setState({ isHovering });
    }, timeoutLength);
  };

  showMenu = () => {
    let isMenuHovering = this.state.isMenuHovering;
    isMenuHovering = true;
    this.setState({ isMenuHovering });
  };

  hideMenu = () => {
    setTimeout(() => {
      let isMenuHovering = this.state.isMenuHovering;
      isMenuHovering = false;
      this.setState({ isMenuHovering });
    }, timeoutLength);
  };

  render() {
    return (
      <Navbar style={navigation} collapseOnSelect expand="lg">
        

        <li style={menuBackground}>
          <NavDropdown.Item style={menuText} href="/men">
            Men
          </NavDropdown.Item>
          <NavDropdown.Item style={menuText} href="/women">
            Women
          </NavDropdown.Item>
          <NavDropdown.Item style={menuText} href="/women">
            Children
          </NavDropdown.Item>
          <NavDropdown.Item style={menuText} href="/rings">
            Accessories
          </NavDropdown.Item>
        </li>
        {/* <Navbar.Collapse id="responsive-navbar-nav" style={{ width: "100%" }}>
          <Nav style={navParent}>
            <button style={buttonStyle} onClick={this.showNavClick}>
              Menu
            </button>
          </Nav>
        </Navbar.Collapse> */}
        <div style={{ width: "100%" }}>
          {(this.state.isHovering || this.state.isMenuHovering) && (
            <CollapsableMenu />
          )}
        </div>
      </Navbar>
    );
  }
}

export default NavigationBar;
