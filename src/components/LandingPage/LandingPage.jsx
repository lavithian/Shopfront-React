import React from "react";
import styles from "./LandingPage.module.css"
import { Link } from "react-router-dom";

function LandingPage () {

  return (
    <div>
      <Link to="/home">
        Landing Page
      </Link>
    </div>
  )
}

export default LandingPage
