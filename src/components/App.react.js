/**
 * @format
 */

import "../styles/App.css";

import React from "react";
import Countdown from "./Countdown.react";

const App = props => (
  <div className="App">
    <Countdown day={5} />
  </div>
);

export default App;
