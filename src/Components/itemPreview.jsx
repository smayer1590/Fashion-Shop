import React, { Component } from "react";

class ItemPreview extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          borderRadius: 10,
          borderStyle: "solid",
          width: 225,
          margin: 50,
        }}
      >
        <div style={{ margin: 10 }}>
          <img
            src={this.props.source}
            alt=""
            style={{ width: 200, marginBottom: 10, WebkitUserDrag: "none" }}
          />
          <span style={{ color: "Wheat" }}>Item Name</span>
          <br />
          <span style={{ color: "Wheat" }}>$ Price</span>
        </div>
      </div>
    );
  }
}

export default ItemPreview;
