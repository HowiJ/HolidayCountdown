/**
 * @format
 */

import "../styles/App.css";

import React from "react";
import Countdown from "./Countdown.react";

const App = props => (
  <div className="App">
    <Countdown month={12} day={25} period="day" />
  </div>
);

export default App;
