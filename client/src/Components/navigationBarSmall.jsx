import React, { Component } from "react";

const background = {
  backgroundColor: "snow",
};
class NavigationBarSmall extends Component {
  state = { open: false };

  openSideBar = () => {
    let open = !this.state.open;
    this.setState({ open });
  };

  render() {
    return (
      <div style={background}>
        <button onClick={this.openSideBar}>PressMeToOpenSideBar</button>
        {this.state.open && <></>}
      </div>
    );
  }
}

export default NavigationBarSmall;
