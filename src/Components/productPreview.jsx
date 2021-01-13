import React, { Component } from "react";

const product = {
  width: 250,
  height: 50,
  display: "inline-flex",
  margin: 10,
  position: "relative",
};

class CartPreview extends Component {
  state = {};

  render() {
    return (
      <div style={product}>
        <img
          src={this.props.source}
          alt=""
          width="50"
          style={{ marginRight: 20 }}
        />
        <p>
          {" "}
          ProductName <br /> $Amount
        </p>
        <button
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default CartPreview;
