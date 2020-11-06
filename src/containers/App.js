import React, { Component } from 'react'
import ThxDrawer from '../components/ThxDrawer';
import ThxWindow from '../components/ThxWindow';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="thx-wrapper flex">
            <ThxDrawer />
            <ThxWindow />
          </div>
        </div>

      </div>
    )
  }
}

export default App;