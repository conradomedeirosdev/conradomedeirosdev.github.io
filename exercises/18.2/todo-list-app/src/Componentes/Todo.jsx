import React, { Component } from 'react';

class Todo extends Component {
  render(){
    const { todo:{value, done} } = this.props;
    return(
      <div className="card">
        <div className="card-content">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p className={`title ${done ? "has-text-grey-light" : ""}`}>{value}</p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item buttons">
                <button className={`button has-text-weight-bold ${done ? "is-warning" : "is-primary"}`}>{done ? "Undo" : "Done"}</button>
                <button className="button is-danger has-text-weight-bold">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
