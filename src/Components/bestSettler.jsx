import React, { Component } from "react";
import ItemPreview from "./itemPreview";
import Popup from "reactjs-popup";

class BestSeller extends Component {
  state = {};

  itemClicked = () => {};

  render() {
    return (
      <div>
        <div style={{ margin: 20 }}>
          <span style={{ color: "wheat", fontSize: 30 }}>Best Sellers</span>
        </div>

        <div
          style={{
            borderStyle: "solid",
            borderColor: "#2c2c0e",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div onClick={this.itemClicked}>
            <ItemPreview source="https://picsum.photos/100" />
          </div>

          <div onClick={this.itemClicked}>
            <ItemPreview source="https://picsum.photos/200" />
          </div>
          <div onClick={this.itemClicked}>
            <ItemPreview source="https://picsum.photos/300" />
          </div>
          <div onClick={this.itemClicked}>
            <ItemPreview source="https://picsum.photos/400" />
          </div>
          <div onClick={this.itemClicked}>
            <ItemPreview source="https://picsum.photos/500" />
          </div>
        </div>
      </div>
    );
  }
}

export default BestSeller;
