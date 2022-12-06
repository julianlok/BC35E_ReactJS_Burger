import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "./Burger.jsx";
import Menu from "./Menu.jsx";

class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-danger text-center mb-5">Bài tập Burger</h3>
        <div className="row">
          <Burger />
          <Menu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapBurger);
