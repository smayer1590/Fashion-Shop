import React, { Component } from "react";
import { Nav } from "react-bootstrap";

const menuBackground = {
  backgroundColor: "#FFEBCD",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "10px",
  borderRadius: "10px",
};

const menuList = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
};

const menuText = {
  margin: "20px",
  textAlign: "center",
  color: "black",
};
class CollapsableMenu extends Component {
  state = {};
  render() {
    return (
      <div style={menuBackground}>
        <div style={menuList}>
          <Nav.Link style={menuText} href="#men">
            Men
          </Nav.Link>
          <Nav.Link style={menuText} href="#women">
            Women
          </Nav.Link>
        </div>
        <div style={menuList}>
          <Nav.Link style={menuText} href="#upper">
            Upper
          </Nav.Link>
          <Nav.Link style={menuText} href="#lower">
            Lower
          </Nav.Link>
          <Nav.Link style={menuText} href="#shoes">
            Shoes
          </Nav.Link>
        </div>
        <div style={menuList}>
          <Nav.Link style={menuText} href="#glasses">
            Glasses
          </Nav.Link>
          <Nav.Link style={menuText} href="#rings">
            Rings
          </Nav.Link>
          <Nav.Link style={menuText} href="#earing">
            Earing
          </Nav.Link>
        </div>
      </div>
    );
  }
}

export default CollapsableMenu;
