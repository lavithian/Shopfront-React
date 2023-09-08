import React from "react";
import styles from "./DisplayCard.module.scss"
import useDisplayCard from "./hooks/useDisplayCard"
import { Link, Navigate, NavLink } from "react-router-dom";

function DisplayCard ({ id, category, name, brand, price, ability, image, description }) {
  const { findBrandColour, invertColour } = useDisplayCard();
  const dataToSend = { id, category, name, brand, price, ability, image, description }
  const backgroundColor = findBrandColour(brand);
  const invertedColour = invertColour(backgroundColor);

  if (!id || !category || !name || !brand || !image || !description) {
    return null;
  }

  return (
    <>
    <div className={styles.displayCard} style={{backgroundColor: backgroundColor}}>
      <div className={styles.displayCategory} style={brand === "amiibo" ? {color: "black"} : {}}><h3>{category}</h3></div>
      <div className={styles.displayName} style={brand === "amiibo" ? {color: "black"} : {}}><h1>{name.replace(/\_/g, ' ')}</h1></div>
      <div className={styles.displayBrand} style={brand === "amiibo" ? {color: "black"} : {}}><h2>{brand}</h2></div>
      <div className={styles.displayImage}>
        <Link to={`/${category}/${id}`} state={dataToSend}>
          <img src={image} alt={name} className={styles.displayImage} />
        </Link>
      </div>
      <div className={styles.displayPrice}>
        <h2>{price > 0 ? price : "SOLD OUT!"}</h2>
      </div>
      {/* <div className={styles.displayButton}>
        <label className={styles.switch}>
          <input type="checkbox"></input>
          <span className={styles.slider}></span>
        </label>
      </div> */}
  
      <div className={styles.buyButton} style={price > 0 ? {backgroundColor: invertedColour} : {display: "none"}}>
        <h1>Buy Now!</h1>
      </div>
      <div />
    </div>
    </>
  );
};

export default DisplayCard
