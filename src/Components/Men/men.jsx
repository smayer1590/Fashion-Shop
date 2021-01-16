import React, { Component } from "react";
import firebase from "firebase";
import ItemPreview from "../itemPreview";

const home = {
  position: "absolute",
  top: 132,
  width: "100%",
  backgroundColor: "#2c0e0e",
};

class Men extends Component {
  state = { product: [] };

  componentDidMount() {
    let product = [];
    firebase
      .database()
      .ref("product")
      .on("value", (snapshop) => {
        let product = [];
        snapshop.forEach((element) => {
          if (element.val().type === "men") {
            product.push(element.val());
          }
        });
        this.setState({ product });
      });

    const url = [
      "images/men.jpg",
      "images/women.jpg",
      "images/accessories.jpg",
    ];

    const ad = [];
    url.forEach((element) => {
      firebase
        .storage()
        .ref(element)
        .getDownloadURL()
        .then((snapshop) => {
          ad.push(snapshop);
        });
    });
    this.setState({ ad });
  }

  render() {
    return (
      <div style={home}>
        {this.state.product.map((data) => {
          return (
            <React.Fragment>
              <main>
                <ItemPreview product={data} />
              </main>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Men;
