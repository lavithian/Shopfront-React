import React from 'react'
import styles from './CategorySwitch.module.scss'
import useCategorySwitch from './hooks/useCategorySwitch'

function CategorySwitch({ nextCategory }) {
  const { icon, width, height } = nextCategory;

  return (
    <div className={styles.categorySwitch} style={{ backgroundImage: `url(${icon})`, width: width, height: height }}/>
  )
}

export default CategorySwitch
