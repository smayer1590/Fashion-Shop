import React, { Component } from "react";
import ItemPreview from "./itemPreview";
import Popup from "reactjs-popup";

class BestSeller extends Component {
  itemClicked = () => {
    console.log("clicked");
  };

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
          {this.props.product.map((data) => {
            return (
              <div
                onClick={this.itemClicked}
                style={{ width: 300, margin: "3%" }}
              >
                <ItemPreview key={data.name} product={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BestSeller;
