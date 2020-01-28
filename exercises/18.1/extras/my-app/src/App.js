import React, { Component, createContext } from 'react';
import './App.css';


const MyContext = createContext();


class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true,
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)
 

class Person extends Component{
  render(){
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            <p>Age: {context.state.age}</p>
            <p>Name: {context.state.name}</p>
            <button onClick={context.growAYearOlder} >+</button>
          </div>
        )}
      </MyContext.Consumer>
    )
  }
}
class App extends Component {

  render(){
    return (
      <MyProvider>
        <div className="App">
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
