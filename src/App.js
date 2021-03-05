import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import HeaderPage from "./common/HeaderPage";
import CoursesPage from "./Courses/CoursesPage";
import NotFound from "./NotFound";
import RegisterPage from "./Register/RegisterPage";
import RegisterComponent from "./_components/RegisterComponent";
import LoginComponent from "./_components/LoginComponent";

function App() {
  return (
    <div className="container-fluid">
      <HeaderPage />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" exact component={CoursesPage} />
        <Route path="/about" exact component={AboutPage} />
        {/* <Route path="/register" exact component={RegisterPage} /> */}
        <Route path="/register" exact component={RegisterComponent} />
        <Route path="/login" exact component={LoginComponent} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
