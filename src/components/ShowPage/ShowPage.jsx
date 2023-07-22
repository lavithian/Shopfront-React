import React from "react"
import styles from "./ShowPage.module.css"
import { useLocation } from "react-router-dom";


function ShowPage () {
  const location = useLocation();
  const  { name, price, brand, ability, category, image } = location.state;

  return (
    <>
      <div className={styles.showItem}>
        <div  className={styles.itemImage}>
          <img src={image} alt={name}/>
        </div>
        <h1 className={styles.itemName}>{name.replace(/\_/g, ' ')}</h1>
        <h3 className={styles.itemType}>{category}</h3>
        <h3 className={styles.itemBrand}>{brand.replace(/\_/g, ' ')}</h3>
        <div className={styles.itemAbilities}>ability: {ability}</div>
        <div className={styles.itemPrice}>{price > 0 ? price : "Sold Out!"}</div>
        <button className={styles.purchaseButton}>{price > 0 ? "Buy Now!" : "Sold Out!"}</button>
      </div>
        {/* <img src={image_link} alt={name} style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "20%",
          // height: "40%"
          height: "auto",
        }} /> */}
    </>
  );
}

export default ShowPage;
