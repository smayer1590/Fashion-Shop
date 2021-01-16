import React, { Component } from "react";
import MainAd from "./mainAd";
import BestSeller from "./bestSeller";
import firebase from "firebase";

const home = {
  position: "absolute",
  top: 132,
  width: "100%",
  backgroundColor: "#2c0e0e",
};

class Home extends Component {
  state = {
    product: [],
    ad: {},
  };

  componentDidMount() {
    firebase
      .database()
      .ref("product")
      .orderByChild("purchaseCount")
      .on("value", (snapshop) => {
        let product = [];
        snapshop.forEach((element) => {
          product.push(element.val());
        });
        this.setState({ product });
      });

    firebase
      .database()
      .ref("ad")
      .orderByChild("purchaseCount")
      .on("value", (snapshop) => {
        this.setState({ ad: snapshop.val() });
      });
  }

  render() {
    return (
      <div style={home}>
        <main>
          <div style={{ marginTop: 0 }}>
            <MainAd ad={this.state.ad} />
          </div>
          <div style={{ margin: 50, backgroundColor: "#2c0e0e" }}>
            <BestSeller product={this.state.product.slice(-6).reverse()} />
          </div>
        </main>
      </div>
    );
  }
}
export default Home;
