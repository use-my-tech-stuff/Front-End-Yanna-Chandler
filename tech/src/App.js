import React, { Component } from 'react';
import './App.css';
import SignInView from './views/SignInView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TechVault</h1>
        <SignInView />
      </div>
    );
  }
}

export default App;
