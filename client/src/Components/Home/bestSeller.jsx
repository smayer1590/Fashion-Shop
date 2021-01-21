import React, { Component } from "react";
import ItemPreview from "../itemPreview";
import "reactjs-popup/dist/index.css";

const displayStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
class BestSeller extends Component {
  state = { showPopup: false, chosenData: [], color: [], url: [] };

  itemClicked = (i) => {
    const element = this.props.product[i];
    this.setState({ chosenData: element });
  };

  popUpClosed = () => {
    const showPopup = false;
    this.setState({ showPopup });
  };

  render() {
    return (
      <div>
        <div style={{ margin: 20 }}>
          <span style={{ fontSize: 30 }}>Best Sellers</span>
        </div>

        <div>
          <div style={displayStyle}>
            {this.props.product
              .slice(0, this.props.product.length / 2)
              .map((data, i) => {
                return (
                  <div key={i} onClick={this.itemClicked.bind(this, i)}>
                    <ItemPreview product={data} />
                  </div>
                );
              })}
          </div>
          <div style={displayStyle}>
            {this.props.product
              .slice(this.props.product.length / 2)
              .map((data, i) => {
                return (
                  <div
                    key={i + this.props.product.length / 2}
                    onClick={this.itemClicked.bind(
                      this,
                      i + this.props.product.length / 2
                    )}
                  >
                    <ItemPreview product={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default BestSeller;
