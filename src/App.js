import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
