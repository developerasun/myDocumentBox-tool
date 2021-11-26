import logo from './logo.svg';
import './App.css';
import LoginControl from './loginControl';
import { Component } from 'react';
import LoggedIn from './login';
import LoggedOut from './logout';

class Click extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isClick:false,
      isLoggedIn:false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(state => ({
      isClick:!(state.isClick),
      isLoggedIn:!(state.isLoggedIn)
    }));
  }

  render() {
    return (
      <div className="momentum">
        <LoginControl isLoggedIn={this.state.isLoggedIn} />

        <button onClick={this.clickHandler}>
          {this.state.isClick ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="testing">
      <Click />
    </div> 
  );
}

export default App;
