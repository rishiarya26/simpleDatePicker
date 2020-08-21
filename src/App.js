import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import DatePicker from './components/datePicker/index';

function App() {
  return <Route path="/" exact component={DatePicker} />;
}

export default App;
