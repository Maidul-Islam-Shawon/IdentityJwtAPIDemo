import React from "react";
import { NavLink } from "react-router-dom";

function HeaderPage() {
  const activeStyle = { color: "Orange" };

  return (
    <nav>
      <NavLink exact activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink exact activeStyle={activeStyle} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>

      <NavLink
        style={{ float: "right" }}
        activeStyle={activeStyle}
        to="/register"
      >
        {"  "} Register
      </NavLink>
      <NavLink style={{ float: "right" }} activeStyle={activeStyle} to="/login">
        Login {" | "}
      </NavLink>
    </nav>
  );
}

export default HeaderPage;
