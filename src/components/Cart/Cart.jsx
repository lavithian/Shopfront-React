import React from 'react'
import cartIcon from "../../data/images/deep-fryer.png";
import styles from "./Cart.module.scss";

function Cart() {
  const itemCount = '9+';
  return (
    <div className={styles.container}>
      <div className={styles.cart} style={{ backgroundImage: `url(${cartIcon})` }} />
      <div className={styles.itemCount}>
        {itemCount}
      </div>
    </div>
  )
}

export default Cart
