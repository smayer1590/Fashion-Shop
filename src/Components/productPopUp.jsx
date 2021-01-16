import React, { Component } from "react";

class ProductPopUp extends Component {
  state = {
    imageList: [],
    colorIndex: 0,
  };

  componentDidMount() {
    this.setState({
      imageList: this.props.product.color[this.state.colorIndex].image,
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "wheat",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {this.props.product.color[this.state.colorIndex].image.map(
              (url, i) => {
                return (
                  <img
                    key={i}
                    src={url}
                    alt=""
                    style={{
                      marginLeft: 30,
                      marginTop: 15,
                      marginBottom: 15,
                      width: 100,
                    }}
                  />
                );
              }
            )}
          </div>
          <img
            src={this.state.imageList[1]}
            alt=""
            style={{
              margin: 20,
              width: 500,
              height: 500,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 150,
          }}
        >
          <span>{this.props.product.name}</span>
          <span>{this.props.product.price}</span>
          <span>{this.props.product.description}</span>
        </div>
      </div>
    );
  }
}

export default ProductPopUp;
