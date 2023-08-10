import { useState } from "react";
import headgearData from "../../../data/headgear/index";
import clothingData from "../../../data/clothing/index";
import shoesData from "../../../data/shoes/index";
import brandList from "../../../data/master/brands.json";

const useHome = () => {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const [gearArray, setGearArray] = useState(headgearData)
  const [currentBrand, setCurrentBrand] = useState("FFFFFF")

  const setArray = () => {
    if (gearArray === headgearData) {
      setGearArray(clothingData)
    } else if (gearArray === clothingData) {
      setGearArray(shoesData)
    } else if (gearArray === shoesData) {
      setGearArray(headgearData)
    } else {
      console.log("Error setting array")
    }
  }
  function closeSearchTab (e) {
    if (isSearchTabOpen && e.target.id !== "searchtab") {
      setIsSearchTabOpen(false);
    };
  }

  return { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab, gearArray, setArray, brandList, currentBrand, setCurrentBrand }
}

export default useHome;
