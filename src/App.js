import "./App.css";
import React, { Component } from "react";
import CartPreview from "./Components/cartPreview";
import NavigationBar from "./Components/navigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <main className="container"></main>
      </React.Fragment>
    );
  }
}
export default App;
