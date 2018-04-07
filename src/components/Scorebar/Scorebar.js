//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Scorebar.css";

class Scorebar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Level: {this.props.level - 1}</li>
          <li className="itemCenter">Mechanical Memory!!</li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Scorebar;