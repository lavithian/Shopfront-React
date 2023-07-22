import React from "react";
import styles from "./LandingPage.module.css"
import { Link } from "react-router-dom";

function LandingPage () {

  return (
    <div>
      <Link to="/home" style={{ fontSize: 28 }}>
        <h1>Landing Page</h1>
      </Link>
      Style your style with...
      <br />
      Headgear
      Clothes
      Shoes
    </div>
  )
}

export default LandingPage
