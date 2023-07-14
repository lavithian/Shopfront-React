import React from "react";
import DisplayCard from "./DisplayCard";
import styles from "./stylesheets/DisplayCardContainer.module.css"

function DisplayCardContainer() {
  const headgearData = require("./data/headgear_data.json");
  const clothingData = require("./data/clothing_data.json");
  const shoesData = require("./data/shoes_data.json");

  return (
    <>
      {/* <ShowItem /> */}
      <div className={styles.displayCardContainer}>
        {headgearData.map((headgear) => (
          <DisplayCard key={headgear.Name} name={headgear.Name} price={headgear.Price} brand={headgear.Brands} ability={headgear.Ability} type="headgear"/>
        ))}
      </div>
    </>
  );
}

export default DisplayCardContainer;

{/* <DisplayCard id="1"/>
<DisplayCard id="2"/>
<DisplayCard id="3"/>
<DisplayCard id="4"/>
<DisplayCard id="5"/>
<DisplayCard id="6"/>
<DisplayCard id="7"/>
<DisplayCard id="8"/>
<DisplayCard id="9"/>
<DisplayCard id="10"/>
<DisplayCard id="11"/>
<DisplayCard id="12"/>
<DisplayCard id="13"/>
<DisplayCard id="14"/>
<DisplayCard id="15"/>
<DisplayCard id="16"/>
<DisplayCard id="17"/>
<DisplayCard id="18"/>
<DisplayCard id="19"/>
<DisplayCard id="20"/> */}
