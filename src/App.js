import "./App.css";
import React, { Component } from "react";
import CartPreview from "./Components/cartPreview";
import NavigationBar from "./Components/navigationBar";
import MainAd from "./Components/mainAd";
import BestSeller from "./Components/bestSettler";
import ProductPopUp from "./Components/productPopUp";
import Popup from "reactjs-popup";

// Firebase Config
const config = {
  apiKey: "AIzaSyAcAfUu2hQKkJRXmgFT3-yEYB1v-SyfQiE",
  authDomain: "fashion-shop-ad276.firebaseapp.com",
  databaseURL: "https://fashion-shop-ad276-default-rtdb.firebaseio.com",
  projectId: "fashion-shop-ad276",
  storageBucket: "fashion-shop-ad276.appspot.com",
  messagingSenderId: "939314404163",
  appId: "1:939314404163:web:14bb8ee3d100ffd949adf6",
  measurementId: "G-HGZD0HY3RL",
};

const adImage = {
  position: "absolute",
  top: 132,
  width: "100%",
  backgroundColor: "#2c0e0e",
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main style={adImage}>
          <div style={{ marginTop: 100 }}>
            <MainAd />
          </div>
          <div style={{ margin: 50, backgroundColor: "#2c0e0e" }}>
            <BestSeller />
          </div>
        </main>
        {/* <Popup
          contentStyle={{
            backgroundColor: "wheat",
            width: "75%",
            height: "75%",
          }}
          open={true}
        >
          <ProductPopUp />
        </Popup> */}
        <NavigationBar />
      </React.Fragment>
    );
  }
}
export default App;
