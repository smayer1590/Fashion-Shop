import { findByLabelText } from "@testing-library/react";
import React, { Component } from "react";
import CartItemPreview from "./cartItemPreview";

const productPreview = {
  width: "25%",
  height: 240,
  backgroundColor: "#795548",
  overflow: "hidden",
  position: "absolute",
  top: 150,
  right: 0,
};
class CartPreview extends Component {
  state = {
    source: "https://picsum.photos/",
  };

  render() {
    return (
      <div style={productPreview}>
        <span style={{ textAlign: "left", color: "wheat" }}>
          Your Shopping Cart:
        </span>
        <div>
          <CartItemPreview source={this.state.source + "100"} />
          <CartItemPreview source={this.state.source + "200"} />
          <CartItemPreview source={this.state.source + "300"} />
          <CartItemPreview source={this.state.source + "400"} />
        </div>

        {/* Need to add total price */}
      </div>
    );
  }
}

export default CartPreview;
