import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./Components/navigationBar";
import MainAd from "./Components/mainAd";
import BestSeller from "./Components/bestSettler";
import firebase from "firebase";
import "@firebase/storage";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAcAfUu2hQKkJRXmgFT3-yEYB1v-SyfQiE",
  authDomain: "fashion-shop-ad276.firebaseapp.com",
  databaseURL: "https://fashion-shop-ad276-default-rtdb.firebaseio.com/",
  projectId: "fashion-shop-ad276",
  storageBucket: "fashion-shop-ad276.appspot.com",
  messagingSenderId: "939314404163",
  appId: "1:939314404163:web:14bb8ee3d100ffd949adf6",
  measurementId: "G-HGZD0HY3RL",
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

const adImage = {
  position: "absolute",
  top: 132,
  width: "100%",
  backgroundColor: "#2c0e0e",
};

class App extends Component {
  state = {
    product: [],
    ad: [],
  };

  componentDidMount() {
    firebase
      .database(app)
      .ref("product")
      .orderByChild("purchaseCount")
      .on("value", (snapshop) => {
        let product = [];
        snapshop.forEach((element) => {
          product.push(element.val());
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
      <React.Fragment>
        <main style={adImage}>
          <div style={{ marginTop: 100 }}>
            <MainAd ad={this.state.ad} />
          </div>
          <div style={{ margin: 50, backgroundColor: "#2c0e0e" }}>
            <BestSeller product={this.state.product.slice(-6).reverse()} />
          </div>
        </main>
        <NavigationBar />
      </React.Fragment>
    );
  }
}
export default App;
