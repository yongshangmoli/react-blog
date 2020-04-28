import React, { Component } from 'react';
import logo from 'assets/imgs/logo.svg';
import './App.css';

import { getBlogList } from 'api'
class App extends Component {
  async componentWillMount () {
    let res = await getBlogList()
    console.log(222222, res)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
