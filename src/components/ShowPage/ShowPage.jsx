import React from "react"
import styles from "./ShowPage.module.css"
import { useParams } from "react-router-dom";

function ShowPage ({ name, price, brand, ability, type }) {
  const link = "https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_";
  const item_name = "Annaki_Beret";
  // const image_link = link + item_name + ".png";
  // const image_link = require("../src/images/hunter.jpg")
  const image_link = require("../../data/images/S3_Gear_Headgear_Annaki_Beret.png")
  const item_price = 10000;
  const { id } = useParams();
  return (
    <>
      {/* <div className={styles.showItem}>
        <div  className={styles.itemImage}>
          <img src={image_link} alt={name}/>
        </div>
        <h1 className={styles.itemName}>{name ? name.replace(/\_/g, ' ') : ''}</h1>
        <h3 className={styles.itemType}>{type}</h3>
        <h3 className={styles.itemBrand}>{brand}</h3>
        <div className={styles.itemAbilities}>ability: {ability}</div>
        <div className={styles.itemPrice}>{price > 0 ? price : "Sold Out!"}</div>
        <button className={styles.purchaseButton}>{price > 0 ? "Buy Now!" : "Sold Out!"}</button>
      </div> */}
        <img src={image_link} alt={name} style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "20%",
          // height: "40%"
          height: "auto",
        }} />
    </>
  );
}

export default ShowPage;
