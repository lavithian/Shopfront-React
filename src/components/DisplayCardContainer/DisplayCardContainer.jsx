import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./DisplayCardContainer.module.css";

import useDisplayCardContainer from "./hooks/useDisplayCardContainer";
import DisplayCardCarousel from "./DisplayCardCarousel/DisplayCardCarousel";


function DisplayCardContainer({ gearList, brandList, setCurrentBrand }) {
  const { settings } = useDisplayCardContainer();

  return (
    <div className={styles.container}>
      <Slider {...settings}>
      {
        brandList.map((brandItem) => (
          <div>
            <DisplayCardCarousel key={brandItem.id} itemList={gearList[brandItem.brand]} />
          </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default DisplayCardContainer;
