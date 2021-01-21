import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";

const menuBackground = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
};

const menuText = {
  margin: "20px",
  textAlign: "center",
  color: "black",
  display: "inline-block",
  maxWidth: 100,
};

class CollapsableMenu extends Component {
  state = {};
  render() {
    return (
      <li style={menuBackground}>
        <NavDropdown.Item style={menuText} href="/men">
          Men
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/women">
          Women
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/upper">
          Upper
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/lower">
          Lower
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/shoes">
          Shoes
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/glasses">
          Glasses
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/rings">
          Rings
        </NavDropdown.Item>
        <NavDropdown.Item style={menuText} href="/earing">
          Earing
        </NavDropdown.Item>
      </li>
    );
  }
}

export default CollapsableMenu;
