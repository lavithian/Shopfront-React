import React, { useEffect } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import styles from "./DisplayCardContainer.module.css"
import useDisplayCardContainer from "./hooks/useDisplayCardContainer";

function DisplayCardContainer() {
  const { gearType, selectGearType, gearArray } = useDisplayCardContainer();

  return (
    <>
      <div className={styles.displayCardContainer}>
       <div onClick={() => selectGearType("headgear")}>Headgear</div>
        <div onClick={() => selectGearType("clothing")}>Clothing</div>
        <div onClick={() => selectGearType("shoes")}>Shoes</div>
        <div onClick={() => selectGearType("all")}>All</div>

        {gearArray.map((gear, index) => (
          // <DisplayCard key={headgear.name} name={headgear.name} price={headgear.price} brand={headgear.brand} ability={headgear.ability} type="headgear"/>
          <DisplayCard key={index} id={index} {...gear} type={gearType} />
        ))}
      </div>
    </>
  );
}

export default DisplayCardContainer;
