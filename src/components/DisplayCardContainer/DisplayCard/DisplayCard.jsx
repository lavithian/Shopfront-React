import React from "react";
import styles from "./DisplayCard.module.css"
import useDisplayCard from "./hooks/useDisplayCard"
import { Link, useParams } from "react-router-dom";

function DisplayCard ({ id, name, price, brand, ability, type }) {
  const { showTags, setShowTags } = useDisplayCard();

  const link = "https://cdn.wikimg.net/en/splatoonwiki/images/8/83/S3_Gear_Headgear_";
  const item_name = "Annaki_Beret";
  // const image_link = link + item_name + ".png";
  const image_link2 = "../images/S3_Gear_Headgear_Annaki_Beret.png"
  const image_link = require("../../../data/images/S3_Gear_Headgear_Annaki_Beret.png")


  return (
    <div className={styles.displayCard}
      // onClick={displayShowPage}
      // key={props.name}
    >
      <div className={styles.displayImage} onMouseEnter={() => setShowTags(true)}
      onMouseLeave={() => setShowTags(false)}>
        <Link to={`${type}/${id}`}>
          <img src={image_link} alt={name} className={styles.displayImage} />
        </Link>
      </div>
      <div className={`${styles.displayDesc} ${showTags ? '' : styles.hideDesc}`}>
        <div className={styles.itemName} >{name ? name.replace(/\_/g, ' ') : ''}</div>
        <div className={styles.itemPrice} >{price > 0 ? price : "Sold Out!"}</div>
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
