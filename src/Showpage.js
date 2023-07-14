import React, { Fragment, useContext } from "react"
import styles from "./stylesheets/Showpage.module.css"
import { HideShowContext } from "./components/App/App";

function ShowItem ({ name, price, brand, ability, type }) {
  const link = "https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_";
  const item_name = "Annaki_Beret";
  // const image_link = link + item_name + ".png";
  // const image_link = require("../src/images/hunter.jpg")
  const image_link = require("./images/S3_Gear_Headgear_Annaki_Beret.png")
  const item_price = 10000;
  const [hideShowItem, setHideShowItem] = useContext(HideShowContext);

  return (
    <>
      <div style={{display: hideShowItem ? "none" : "grid"}} className={styles.showItem} id="show">
        <div  className={styles.itemImage}>
          <img src={image_link} alt={name}/>
        </div>
        <h1 className={styles.itemName}>{name ? name.replace(/\_/g, ' ') : ''}</h1>
        <h3 className={styles.itemType}>{type}</h3>
        <h3 className={styles.itemBrand}>{brand}</h3>
        <div className={styles.itemAbilities}>Ability: {ability}</div>
        <div className={styles.itemPrice}>{price > 0 ? price : "Sold Out!"}</div>
        <button className={styles.purchaseButton}>{price > 0 ? "Buy Now!" : "Sold Out!"}</button>
      </div>
    </>
  );
}

export default ShowItem;
