import React, { Component } from "react";
import { connect } from "react-redux";
import "../components/BaiTapBurger.css";

class Burger extends Component {
  renderBurgerUI = () => {
    let { burger } = this.props;
    // console.log(Object.entries(burger));
    return Object.entries(burger).map(([name, value]) => {
      let arrBurger = [];
      for (let i = 0; i < value; i++) {
        arrBurger.push(<div key={i} className={name}></div>);
      }
      return arrBurger;
    });
  };

  render() {
    this.renderBurgerUI();
    return (
      <div className="col-7">
        <div className="breadTop"></div>
        {this.renderBurgerUI()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
