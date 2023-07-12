// images/S3_Gear_Headgear_Annaki_Beret.png
// import Image from "./images/S3_Gear_Headgear_Annaki_Beret";

// Headgear: https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_Annaki_Beret.png
// Body: https://cdn.wikimg.net/en/splatoonwiki/images/9/9f/S3_Gear_Clothing_Annaki_Drive_Tee.png
// Shoes: https://cdn.wikimg.net/en/splatoonwiki/images/5/51/S3_Gear_Shoes_Annaki_Habaneros.png

// local image not working

import React from "react";
import styles from "./stylesheets/DisplayCard.module.css"

function DisplayCard () {
  const link = "https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_";
  const item_name = "Annaki_Beret";
  const image_link = link + item_name + ".png";
  const item_price = 10000;
  return (
    <div className={styles.displayContainer}>
      <div className={styles.displayImage}></div>
      <img src={image_link} alt={item_name} className={styles.displayImage} />
      <div className={styles.itemName}>{item_name.replace('_', ' ')}</div>
      <div className={styles.itemPrice}>{item_price}</div>
    </div>
  );
};

// Gear type
// Gear name
// Brand
// Price
// Picture

export default DisplayCard
