import { useState } from "react";
import headgearData from "../../../data/headgear/index";
import clothingData from "../../../data/clothing/index";
import shoesData from "../../../data/shoes/index";
import brandList from "../../../data/master/brands.json";

const useHome = () => {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const [gearArray, setGearArray] = useState(headgearData);
  const [currentBrand, setCurrentBrand] = useState("Annaki");
  const [previousBrand, setPreviousBrand] = useState();
  const [nextBrand, setNextBrand] = useState();

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

  function getBrandId(brandName) {
    let modifiedBrandName = modifyBrandName(brandName);

    for (const brandObj of brandList) {
      if (brandObj.brand === modifiedBrandName) {
        return brandObj.id;
      }
    }

    return null; // Return null if the brand is not found
  }

  function getBrandNameById(id) {
    for (const brandObj of brandList) {
      if (brandObj.id === id) {
        return brandObj.brand;
      }
    }
    return null; // Return null if the ID is not found
  }

  function getBrandColourbyId(id) {
    for (const brandObj of brandList) {
      if (brandObj.id == id) {
        return brandObj.colour;
      }
    }
  }

  function closeSearchTab (e) {
    if (isSearchTabOpen && e.target.id !== "searchtab") {
      setIsSearchTabOpen(false);
    };
  }

  const modifyBrandName = brandName => {
    let modifiedBrandName = brandName;

    if (brandName === "Z+F") {
      modifiedBrandName = "ZF";
    } else if (brandName === "Krak-On") {
      modifiedBrandName = "KrakOn";
    }

    return modifiedBrandName;
  }

  const goToNextBrand = () => {
    setCurrentBrand(nextBrand)
  }

  const goToPrevBrand = () => {
    setCurrentBrand(previousBrand)
  }

  return { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab, gearArray, setArray, brandList, currentBrand, setCurrentBrand, setNextBrand, setPreviousBrand, modifyBrandName, previousBrand, nextBrand, getBrandId, getBrandNameById, goToNextBrand, goToPrevBrand }
}

export default useHome;
