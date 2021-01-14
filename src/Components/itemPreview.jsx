import React, { Component } from "react";
import firebase from "firebase";

class ItemPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "images/" + this.props.product.name + "/all.gif",
      url: "",
    };
  }

  componentDidMount() {
    firebase
      .storage()
      .ref(this.state.source)
      .getDownloadURL()
      .then((url) => {
        this.setState({ url });
      });
  }

  render() {
    return (
      <div
        style={{
          borderRadius: 10,
          borderStyle: "solid",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={this.state.url}
          style={{
            width: 200,
            WebkitUserDrag: "none",
            marginTop: 10,
          }}
        />
        <div style={{ margin: 10 }}>
          <span style={{ color: "Wheat" }}>{this.props.product.name}</span>
          <br />
          <span style={{ color: "Wheat" }}>
            {"$ " + this.props.product.price}
          </span>
        </div>
      </div>
    );
  }
}

export default ItemPreview;
