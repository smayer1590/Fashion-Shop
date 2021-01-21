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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={this.state.url}
          alt=""
          style={{
            width: "100%",
            WebkitUserDrag: "none",
            margin: 30,
          }}
        />
        <div style={{ margin: 10, textAlign: "left" }}>
          <h3>{this.props.product.name}</h3>
          <br />
          <h4>{"$ " + this.props.product.price}</h4>
        </div>
      </div>
    );
  }
}

export default ItemPreview;
