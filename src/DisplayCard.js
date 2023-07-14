// images/S3_Gear_Headgear_Annaki_Beret.png
// import Image from "./images/S3_Gear_Headgear_Annaki_Beret";

// Headgear: https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_Annaki_Beret.png
// Body: https://cdn.wikimg.net/en/splatoonwiki/images/9/9f/S3_Gear_Clothing_Annaki_Drive_Tee.png
// Shoes: https://cdn.wikimg.net/en/splatoonwiki/images/5/51/S3_Gear_Shoes_Annaki_Habaneros.png

// ASK OLIVER
// local image not working

import React, { useContext, useState } from "react";
import styles from "./stylesheets/DisplayCard.module.css"
import { HideShowContext, HideFilterContext } from "./components/App/App";
import ShowItem from "./Showpage";


function DisplayCard ({ name, price, brand, ability, type }) {
  const link = "https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_";
  const item_name = "Annaki_Beret";
  // const image_link = link + item_name + ".png";
  const image_link2 = "../images/S3_Gear_Headgear_Annaki_Beret.png"
  const image_link = require("./images/S3_Gear_Headgear_Annaki_Beret.png")
  const item_price = 10000;
  const [hideShowItem, setHideShowItem] = useContext(HideShowContext);
  // const [hideFilter, setHideFilter] = useContext(HideFilterContext);
  const [hideTags, setHideTags] = useState(true);


  const handleMouseEnter = (e) => {
    setHideTags(false);
  };

  const handleMouseLeave = () => {
    setHideTags(true);
  };

  const displayShowPage = () => {
    // if (hideFilter) {
    //   setHideShowItem(false)
    // }
    setHideShowItem(false)
  }


  return (
    <div className={styles.displayCard}
      onClick={displayShowPage}

      // key={props.name}
    >
      <div className={styles.displayImage} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <img src={image_link} alt={name} className={styles.displayImage} />
      </div>
      <div className={`${styles.displayDesc} ${hideTags ? styles.hideDesc : ''}`}>
        <div className={styles.itemName} >{name ? name.replace(/\_/g, ' ') : ''}</div>
        <div className={styles.itemPrice} >{price > 0 ? price : "Sold Out!"}</div>
      </div>
      <div><ShowItem key={name} name={name} price={price} brand={brand} ability={ability} type={type}/></div>
    </div>
  );
};

// Gear type
// Gear name
// Brand
// Price
// Picture

export default DisplayCard
