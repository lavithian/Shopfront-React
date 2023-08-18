import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./DisplayCardContainer.module.css";

import useDisplayCardContainer from "./hooks/useDisplayCardContainer";
import DisplayCard from "./DisplayCard/DisplayCard";


function DisplayCardContainer({ gearList }) {
  const { settings } = useDisplayCardContainer();

  return (
    <div className={styles.container}>
      <Slider {...settings}>
      {
        gearList.map((item) => (
          <div>
            <DisplayCard {...item}/>
          </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default DisplayCardContainer;
