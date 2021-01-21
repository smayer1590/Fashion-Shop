import React, { Component } from "react";
import firebase from "firebase";
import ItemPreview from "../itemPreview";

const section = {
  display: "inline-block",
};

const product = {
  backgroundColor: "snow",
  display: "inline-block",
  flexDirection: "row",
  flexWrap: "wrap",
};

class Men extends Component {
  state = { product: [] };
  componentDidMount() {
    var product = [];
    firebase
      .database(this.props.server)
      .ref("product")
      .on("value", (snapshop) => {
        snapshop.forEach((element) => {
          if (element.val().type === "men") product.push(element.val());
        });
        this.setState({ product });
      });
  }

  render() {
    return (
      <div
        style={{
          display: "block",
          width: "100%",
          backgroundColor: "snow",
          position: "relative",
          top: 0,
        }}
      >
        <div>
          <div>
            {/* We want Filter on Top */}
            <nav>
              <ul style={{ display: "block" }}>
                <li style={{ display: "inline-block" }}>Filter</li>
                <li style={{ display: "inline-block" }}>Sort By</li>
              </ul>
            </nav>
          </div>
          <div style={section}>
            <ul style={product}>
              {this.state.product.map((data, i) => {
                return (
                  <li style={{ margin: 10, display: "inline-block" }}>
                    <ItemPreview key={i} product={data} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Men;
