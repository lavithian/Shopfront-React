import { useState } from "react";

import headgearData from "../../../data/headgear/headgear_data.json";
import clothingData from "../../../data/clothing/clothing_data.json";
import shoesData from "../../../data/shoes/shoes_data.json";

function useDisplayCardContainer () {
  const [gearType, setGearType] = useState("all");
  const [showSelection, setShowSelection] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  function gotoPrevious () {
    const newCardIndex = currentIndex === 0 ? gearArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newCardIndex);
  }

  function gotoNext () {
    const newCardIndex = currentIndex === gearArray.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newCardIndex);
  }

  return { gearType, selectGearType, gearArray, currentIndex, gotoPrevious, gotoNext };
}

export default useDisplayCardContainer;
