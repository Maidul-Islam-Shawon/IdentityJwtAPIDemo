import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import HeaderPage from "./common/HeaderPage";
import CoursesPage from "./Courses/CoursesPage";
import NotFound from "./NotFound";
import RegisterPage from "./Register/RegisterPage";

function App() {
  return (
    <div className="container-fluid">
      <HeaderPage />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" exact component={CoursesPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
