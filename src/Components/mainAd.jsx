import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const image = {
  width: "100%",
  marginTop: 100,
  marginBottom: 100,
  height: 400,
};

const buttonStyle = {
  margin: "auto",
  textAlign: "center",
  height: 50,
  width: 125,
  backgroundColor: "wheat",
  border: "none",
  color: "black",
  borderRadius: 5,
};

const slideImages = [
  "https://picsum.photos/300",
  "https://picsum.photos/400",
  "https://picsum.photos/500",
];

class MainAd extends Component {
  state = {};
  render() {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: 400,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button style={buttonStyle}>Shop Mens</button>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[1]})`,
                height: 400,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button style={buttonStyle}>Shop Womens</button>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[2]})`,
                height: 400,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button style={buttonStyle}>Shop Accessories</button>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default MainAd;
