import React, { Component } from 'react';
import Wrapper from './wrapper/wrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>TriMet Portland Live View</h1>
        </header>
        <Wrapper/>
      </div>
    );
  }
}

export default App;
