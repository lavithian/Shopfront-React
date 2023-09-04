import React from "react"
import { useLocation } from "react-router-dom";
import styles from "./ShowPage.module.scss"
import useShowPage from "./hooks/useShowPage";
import moneyIcon from "../../data/images/S3_Icon_Cash.png";

function ShowPage () {
  const location = useLocation();
  const  { name, price, brand, ability, category, image, description, backgroundColor } = location.state;
  const { getAbilityImageByName, getBrandImageByName } = useShowPage();
  return (
    <>
      <div className={styles.showItem} style={{backgroundColor: backgroundColor}}>
        <div  className={styles.itemImage}>
          <img src={image} alt={name}/>
        </div>
        <div className={styles.itemName}>
          <h3>{category}</h3>
          <h1>{name.replace(/\_/g, ' ')}</h1>
        </div>
        <div className={styles.itemBrand}>
          <img src={getBrandImageByName(brand)} alt={brand}/>
          <h3>{brand.replace(/\_/g, ' ')}</h3>
        </div>
        <div className={styles.itemAbilities}>
          <img src={getAbilityImageByName(ability)} alt={ability} />
          <h3>{ability.replace(/\_/g, ' ')}</h3>
        </div>
        <div className={styles.itemDescription}>
          <p>{description}</p>
        </div>
        <div className={styles.itemPrice}>
          <img src={moneyIcon} alt="cash"/>{price > 0 ? price : "Sold Out!"}
        </div>
        <button className={styles.purchaseButton}>{price > 0 ? "Buy Now!" : "Sold Out!"}</button>
      </div>
    </>
  );
}

export default ShowPage;
