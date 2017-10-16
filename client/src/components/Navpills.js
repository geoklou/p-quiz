import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    {/* <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li> */}
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">About</Link>
    </li>
    <li className={window.location.pathname === "/form" ? "active" : ""}>
      <Link to="/form">Enter Questions</Link>
    </li>
    <li className={window.location.pathname === "/quizzes" ? "active" : ""}>
      <Link to="/quizzes">All Questions</Link>
    </li>
    <li className={window.location.pathname === "/test" ? "active" : ""}>
      <Link to="/test">Quiz</Link>
    </li>
    <li
      className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>;

export default Navpills;