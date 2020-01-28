import React, { Component } from 'react';
import logo from '../image/Logo1.svg'
import '../Style/Navbar.css'

class Navbar extends Component {
  render(){

    return (
      <div className="navbar has-shadow">
       <div className="navbar-brand">
          <div className="navbar-item">
            <img className="logo" src={logo} alt={logo} />
          </div>
        </div>
  
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input type="text" className="input" />
                </p>
                <p className="control">
                  <button className="button has-text-weight-bold">
                    Add Task
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar