import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

// initialize state
constructor(props) {
    //  Must call super constructor in derived class
    //  before accessing 'this' or returning from derived constructor
    // super is a parent class contructor, which defines 'this' keyword.
    // without super(props) defined, 'this' keyword won't be available below codes.
    // see here for more details : https://overreacted.io/why-do-we-write-super-props/#:~:text=In%20JavaScript%2C%20super%20refers%20to,ve%20called%20the%20parent%20constructor.
    super(props);
    this.state = {
      btnName : "hello react"
    };
  }

  changeButtonName = (btnName) => {
    // changing state should be only done with setState method. 
    this.setState({btnName:btnName});
  }; 

  render() {
    return (
      <div>
        <h1>My Button Name : {this.state.btnName}</h1>
        <div>Change Button Name : 
          <button 
          // this.function.bind(this, argument) : For a given function, creates a bound function 
          // that has the same body as the original function.
          onClick={this.changeButtonName.bind(this, 'good bye react')}> Click Me</button>
        </div>
      </div>
    );
  }
}

export default App;
