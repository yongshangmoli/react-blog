import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {renderRoutes} from 'react-router-config';
import {HashRouter as Router} from 'react-router-dom';
import routes from 'router/index'; // 导入路由配置文件

class App extends Component {

  render () {
    return (
      <div className="App">
        <Router>
          <div>
            {renderRoutes(routes)}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
