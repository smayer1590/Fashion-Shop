import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import CollapsableMenu from "./collapsableMenu";

const navParent = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const navContent = {
  fontSize: "30px",
  color: "wheat",
  textAlign: "center",
  marginBottom: 0,
};

const navigation = {
  backgroundColor: "#170e09",
  display: "flex",
  flexDirection: "column",
};

const timeoutLength = 300;

class NavigationBar extends Component {
  state = { isHovering: false, isMenuHovering: false };

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
        <Navbar.Brand style={navContent}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ width: "100%" }}>
          <Nav style={navParent}>
            <Nav.Link
              href="men"
              style={navContent}
              onMouseEnter={this.showNav}
              onMouseLeave={this.hideNav}
            >
              Men
            </Nav.Link>
            <Nav.Link
              href="women"
              style={navContent}
              onMouseEnter={this.showNav}
              onMouseLeave={this.hideNav}
            >
              Women
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div
          style={{ width: "100%" }}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
        >
          {(this.state.isHovering || this.state.isMenuHovering) && (
            <CollapsableMenu />
          )}
        </div>
      </Navbar>
    );
  }
}

export default NavigationBar;
