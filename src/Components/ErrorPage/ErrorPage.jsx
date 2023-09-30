import React from "react";
import "./ErrorPage.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto ">
      <div className="mars"></div>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        className="logo-404"
      />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        className="meteor"
      />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div align="center">
        <NavLink to="/" className="btn-back">
          Back to previous page
        </NavLink>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        className="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        className="spaceship"
      />
    </div>
  );
};

export default ErrorPage;
