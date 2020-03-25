import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
