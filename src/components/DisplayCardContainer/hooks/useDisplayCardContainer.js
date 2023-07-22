import { useState } from "react";

import headgearData from "../../../data/headgear_data.json";
import clothingData from "../../../data/clothing_data.json";
import shoesData from "../../../data/shoes_data.json";

function useDisplayCardContainer () {
  const [gearType, setGearType] = useState("all");
  const [showSelection, setShowSelection] = useState(true);
  let gearArray = gearList(gearType);


  function selectGearType(type) {
    setGearType(type);
    gearArray = gearList(gearType);
    setShowSelection(false);
  }

  function gearList (type) {
    if (type === "headgear") {
      return headgearData;
    } else if (type === "clothing") {
      return clothingData
    } else if (type ==="shoes") {
      return shoesData;
    } else if (type === "all") {
      return headgearData.concat(clothingData, shoesData);
    } else {
      throw new Error(`Invalidgear type: ${type}`);
    }
  }

  return { gearType, selectGearType, gearArray };
}

export default useDisplayCardContainer;
