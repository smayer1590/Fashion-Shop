import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./Components/navigationBar";
import Home from "./Components/Home/home";
import Men from "./Components/Men/men";
//import Women from "./Components/Women/women";
import firebase from "firebase";
import "@firebase/storage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
  render() {
    return (
      <Router>
        <NavigationBar />

        <React.Fragment>
          <Switch>
            <Route exact path="/">
              <Home />
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
      </Router>
    );
  }
}
export default App;
