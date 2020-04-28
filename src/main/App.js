import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import Admin from 'pages/admin';

import { getBlogList } from 'api';
class App extends Component {
  async componentWillMount () {
    let res = await getBlogList()
    console.log(222222, res)
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* <Redirect from="/" to="/timeline" exact /> */}
            <Route exact path='/' component={Home}></Route>
            <Route path='/admin' component={Admin}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
