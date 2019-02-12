import React, { Component } from "react";
import "./App.css";

import TestHook from "./components/TestHook";
import ReducerHook from "./components/ReducerHook";
import RefHook from "./components/RefHook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <TestHook initialCount={0} />
        </div>
        <div>
          <ReducerHook initialCount={100} />
        </div>
        <div>
          <RefHook />
        </div>
      </div>
    );
  }
}

export default App;
