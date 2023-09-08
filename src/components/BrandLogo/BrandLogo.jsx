import React from 'react'
import styles from './BrandLogo.module.scss'

function BrandLogo({ image }) {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${image})`}} />
  )
}

export default BrandLogo;
