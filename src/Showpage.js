import React, { useContext } from "react"
import styles from "./stylesheets/Showpage.module.css"
import { HideShowContext } from "./App";

function ShowItem () {
  const link = "https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_";
  const item_name = "Annaki_Beret";
  const image_link = link + item_name + ".png";
  const item_price = 10000;
  const [hideShowItem, setHideShowItem] = useContext(HideShowContext);

  return (
    <div style={{display: hideShowItem ? "grid" : "none"}} className={styles.showItem}>
      <div  className={styles.itemImage}>
        <img src={image_link} alt={item_name}/>
      </div>
      <h1 className={styles.itemName}>{item_name.replace('_', ' ')}</h1>
      <h3 className={styles.itemType}>Headgear</h3>
      <h3 className={styles.itemBrand}>Annaki</h3>
      <div className={styles.itemAbilities}>Abilities</div>
      <div className={styles.itemPrice}>{item_price}</div>
      <button className={styles.purchaseButton}>BUY NOW</button>
    </div>
  );
}

export default ShowItem;
