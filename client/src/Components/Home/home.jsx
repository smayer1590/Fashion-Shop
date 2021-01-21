import React, { Component } from "react";
import MainAd from "./mainAd";
import BestSeller from "./bestSeller";
import firebase from "firebase/app";

const home = {
  width: "100%",
  backgroundColor: "snow",
};

class Home extends Component {
  state = { ad: {}, product: [] };

  componentDidMount() {
    var product = [];
    firebase
      .database(this.props.server)
      .ref("product")
      .on("value", (snapshop) => {
        snapshop.forEach((element) => {
          product.push(element.val());
        });
        this.setState({ product });
      });

    firebase
      .database(this.props.server)
      .ref("ad")
      .on("value", (snapshop) => {
        this.setState({ ad: snapshop.val() });
      });
  }

  render() {
    return (
      <div style={home}>
        <div style={{ marginTop: 0 }}>
          <MainAd ad={this.state.ad} />
        </div>
        <div style={{ margin: 50, backgroundColor: "snow" }}>
          <BestSeller product={this.state.product.slice(-6).reverse()} />
        </div>
      </div>
    );
  }
}
export default Home;
