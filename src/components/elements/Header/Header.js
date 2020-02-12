import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        <img
          className="rmdb-logo"
          src="https://raw.githubusercontent.com/TheKetan2/movie-app/master/public/images/reactMovie_logo.png"
          alt="rmdb-logo"
        />
      </Link>
      <img
        className="rmdb-tmdb-logo"
        src="https://raw.githubusercontent.com/TheKetan2/movie-app/master/public/images/tmdb_logo.png"
        alt="tmdb-logo"
      />
    </div>
  </div>
);

export default Header;
