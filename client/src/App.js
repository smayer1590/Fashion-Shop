import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./Components/navigationBar";
import NavigationBarSmall from "./Components/navigationBarSmall";
import Home from "./Components/Home/home";
import Men from "./Components/Men/men";
//import Women from "./Components/Women/women";
import firebase from "firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MediaQuery from "react-responsive";
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

var app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

const maxScreenWidth = 991;

class App extends Component {
  state = { product: [], ad: {} };
  componentDidMount() {
    var product = [];
    firebase
      .database(app)
      .ref("product")
      .on("value", (snapshop) => {
        snapshop.forEach((element) => {
          product.push(element.val());
        });
      });

    var ad = {};
    firebase
      .database(app)
      .ref("ad")
      .on("value", (snapshop) => {
        ad = snapshop.val();
      });

    this.setState({ product, ad });
  }
  render() {
    return (
      <Router>
        <header
          style={{
            backgroundColor: "snow",
            display: "grid",
            justifyItems: "center",
          }}
        >
          <a href="/" style={{ fontSize: "30px", color: "black" }}>
            Logo
          </a>
        </header>
        <main> 
          <MediaQuery minWidth={maxScreenWidth + 1}>
            <NavigationBar style={{ zIndex: 1, display: "inline-block" }} />
          </MediaQuery>
          <MediaQuery maxWidth={maxScreenWidth}>
            <NavigationBarSmall />
          </MediaQuery>

          <React.Fragment>
            <Switch>
              <Route exact path="/">
                <Home style={{ display: "inline-block" }} />
              </Route>

              <Route exact path="/men">
                <Men />
              </Route>
              {/*<Route exact path="/women">
            <Women />
          </Route>
          <Route exact path="/accessories">
            <Accessories />
          </Route> */}
            </Switch>
          </React.Fragment>
        </main>
      </Router>
    );
  }
}
export default App;
