import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import authService from "../_services/auth.service";

function HeaderPage(props) {
  const activeStyle = { color: "Orange" };

  const [state, setState] = useState({
    currentUser: undefined,
    showCourse: false,
    showProfile: false,
    showLoginReg: true,
    showLogout: false,
  });

  const user = authService.getCurrentUser();

  useEffect(() => {
    if (user) {
      setState({
        currentUser: user,
        showCourse: true,
        showProfile: true,
        showLoginReg: false,
        showLogout: true,
      });
    }
  }, []);

  const logOut = () => {
    authService.logout();

    window.location.reload();
  };

  return (
    <nav>
      <NavLink exact activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      {" | "}

      {state.showCourse && (
        <NavLink exact activeStyle={activeStyle} to="/courses">
          Courses
        </NavLink>
      )}

      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      {" | "}
      {state.showProfile && (
        <NavLink activeStyle={activeStyle} to="/profile">
          Profile
        </NavLink>
      )}

      {state.showLoginReg ? (
        <>
          <NavLink
            style={{ float: "right" }}
            activeStyle={activeStyle}
            to="/register"
          >
            {"  "} Register
          </NavLink>
          <NavLink
            style={{ float: "right" }}
            activeStyle={activeStyle}
            to="/login"
          >
            Login {" | "}
          </NavLink>
        </>
      ) : (
        <NavLink
          style={{ float: "right" }}
          activeStyle={activeStyle}
          onClick={logOut}
          to="/"
        >
          Logout
        </NavLink>
      )}

      {/* {state.showLogout && (
        <NavLink style={{ float: "right" }} activeStyle={activeStyle}>
          {"  "} Logout
        </NavLink>
      )} */}
    </nav>
  );
}

export default HeaderPage;
