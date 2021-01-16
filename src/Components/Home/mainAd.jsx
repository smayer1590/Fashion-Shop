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
};

class MainAd extends Component {
  state = {};
  render() {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${this.props.ad.men})`,
                height: 800,
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
                backgroundImage: `url(${this.props.ad.women})`,
                height: 800,
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
                backgroundImage: `url(${this.props.ad.accessories})`,
                height: 800,
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
