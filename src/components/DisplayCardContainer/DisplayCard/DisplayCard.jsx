import React from "react";
import styles from "./DisplayCard.module.css"
import useDisplayCard from "./hooks/useDisplayCard"
import { Link, Navigate, NavLink } from "react-router-dom";

function DisplayCard ({ id, name, price, brand, ability, category, image, centre }) {
  const dataToSend = { name, price, brand, ability, category, image }
  // const navigate = useNavigate();
  // navigate(centre ? { pathname: `${category}/${id}`, state: dataToSend } : '#')
  return (
    <div className={styles.displayCard}>
      <div className={styles.displayCategory}>{category}</div>
      <div className={styles.displayName}><h1>{name.replace(/\_/g, ' ')}</h1></div>
      <div className={styles.displayBrand}>{brand}</div>
      <div className={styles.displayImage}>
        {/* <Link to={centre ? { pathname: `${category}/${id}`, state: "dataToSend" } : '#'}> */}
        <Link to={centre ? `${category}/${id}` : '#'} state={centre ? dataToSend : null}>
          <img src={image} alt={name} className={styles.displayImage} />
        </Link>
        {/* <Navigate to={centre ? { pathname: `${category}/${id}`, state: "hi" } : '#'}>
          <img src={image} alt={name} className={styles.displayImage} />
        </Navigate> */}
        {/* <NavLink to={centre ? { pathname: `${category}/${id}`, state: "hi" } : '#'}>
          <img src={image} alt={name} className={styles.displayImage} />
        </NavLink> */}
      </div>
      <div className={price > 0 ? styles.displayPrice : styles.displaySoldOutPrice}>
      {price > 0 ? price : "SOLD OUT!"}
      </div>
      <div className={styles.displayButton}>
        <label className={styles.switch}>
          <input type="checkbox"></input>
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

// Gear type
// Gear name
// brand
// price
// Picture

export default DisplayCard
