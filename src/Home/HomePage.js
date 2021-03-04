import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Redux and React Router for ultra responsive web pages</p>
      <Link to="about">Learn More</Link>
    </div>
  );
}

export default HomePage;
