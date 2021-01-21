import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const buttonStyle = {
  margin: "auto",
  textAlign: "center",
  height: 50,
  width: 125,
  backgroundColor: "wheat",
  border: "none",
  color: "black",
  borderRadius: 5,
  position: "absolute",
};

const slideStyle = {
  display: "contents",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
};

const eachSlideStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "Center",
};
class MainAd extends Component {
  getWindowWidth() {
    return window.width;
  }

  state = {};
  render() {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide" style={eachSlideStyle}>
            <div style={slideStyle}>
              <img src={this.props.ad.men} style={imageStyle}></img>
              <button style={buttonStyle}>Shop Mens</button>
            </div>
          </div>
          <div className="each-slide" style={eachSlideStyle}>
            <div style={slideStyle}>
              <img src={this.props.ad.women} style={imageStyle}></img>
              <button style={buttonStyle}>Shop Womens</button>
            </div>
          </div>
          <div className="each-slide" style={eachSlideStyle}>
            <div style={slideStyle}>
              <img src={this.props.ad.accessories} style={imageStyle}></img>
              <button style={buttonStyle}>Shop Accessories</button>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default MainAd;
