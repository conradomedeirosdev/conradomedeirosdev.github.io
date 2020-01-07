import React, { Component } from "react";
import "../Styles/Main.css";

export class Main extends Component {
  render() {
    return (
      <div className="game">
        <div className="linha">
          <div className="casa" id="casa1"></div>
          <div className="casa" id="casa2"></div>
          <div className="casa" id="casa3"></div>
        </div>
        <div className="linha">
          <div className="casa" id="casa4"></div>
          <div className="casa" id="casa5"></div>
          <div className="casa" id="casa6"></div>
        </div>
        <div className="linha">
          <div className="casa" id="casa7"></div>
          <div className="casa" id="casa8"></div>
          <div className="casa" id="casa9"></div>
        </div>
      </div>
    );
  }
}

export default Main;
