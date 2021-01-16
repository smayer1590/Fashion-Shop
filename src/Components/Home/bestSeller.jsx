import React, { Component } from "react";
import ItemPreview from "../itemPreview";
import "reactjs-popup/dist/index.css";

class BestSeller extends Component {
  state = { showPopup: false, chosenData: [], color: [], url: [] };

  itemClicked = (i) => {
    const element = this.props.product[i];
    this.setState({ chosenData: element });
    // const showPopup = true;
    // this.setState({ showPopup });
    // history.push("/element");
  };

  popUpClosed = () => {
    const showPopup = false;
    this.setState({ showPopup });
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
          {this.props.product.map((data, i) => {
            return (
              <div
                key={i}
                onClick={this.itemClicked.bind(this, i)}
                style={{ width: 300, margin: "3%" }}
              >
                <ItemPreview product={data} />
                {/* {this.state.showPopup && (
                  <ProductPopUp
                    color={this.state.color}
                    url={this.state.url}
                    product={this.state.chosenData}
                  />
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BestSeller;
