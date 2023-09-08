import { useState, useEffect } from "react";
import headgearData from "../../../data/headgear/index";
import clothingData from "../../../data/clothing/index";
import shoesData from "../../../data/shoes/index";
import brandList from "../../../data/master/brands.json";

import shirtIcon from "../../../data/images/shirt2.png";
import shoesIcon from "../../../data/images/shoes2.png";
import headgearIcon from "../../../data/images/headgear2.png";


const useHome = () => {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const [gearArray, setGearArray] = useState(headgearData);
  const [currentBrand, setCurrentBrand] = useState("Annaki");
  const [previousBrand, setPreviousBrand] = useState();
  const [nextBrand, setNextBrand] = useState();
  const [nextCategory, setNextCategory] = useState({icon: shirtIcon, width: "50%", height: "100%"})

  const setArray = () => {
    if (gearArray === headgearData) {
      setGearArray(clothingData)
      // setNextCategory("shoes")
      setNextCategory({icon: shoesIcon, width: "100%", height: "100%"})
    } else if (gearArray === clothingData) {
      setGearArray(shoesData)
      // setNextCategory("headgear")
      setNextCategory({icon: headgearIcon, width: "50%", height: "100%"})
    } else if (gearArray === shoesData) {
      setGearArray(headgearData)
      // setNextCategory("shirt")
      setNextCategory({icon: shirtIcon, width: "50%", height: "100%"})
    } else {
      console.log("Error setting array")
      return null;
    }
  }

  function getBrandId(brandName) {
    // let modifiedBrandName = modifyBrandName(brandName);
    const brandNameMappings = {
      "ZF": "Z+F",
      "KrakOn": "Krak-On",
    };

    // Use the mapping object to get the modified brand name
    let modifiedBrandName = brandNameMappings[brandName] || brandName;


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
    // setCurrentBrand(nextBrand)
    setCurrentBrand(modifyBrandName(nextBrand))
  }

  const goToPrevBrand = () => {
    // setCurrentBrand(previousBrand)
    setCurrentBrand(modifyBrandName(previousBrand))
  }

  const getBrandImage = (brand) => {
    for (const brandObj of brandList) {
      if (brandObj.brand === brand) {
        return brandObj.image
      }
    }
  }

  useEffect(() => {
    const maxId = brandList.length
    const num = getBrandId(currentBrand)
    const nextID = num + 1 > maxId ? 1 : num + 1
    const prevID = num - 1 < 1 ? maxId : num - 1;
    const nextBrandName = modifyBrandName(getBrandNameById(nextID));
    const prevBrandName = modifyBrandName(getBrandNameById(prevID));
    // console.log("Max length: " + maxId)
    console.log("Previous ID: " + prevID);
    console.log("Current ID: " + num)
    console.log("Current Brand: " + currentBrand)
    console.log("Next ID: " + nextID)
    console.log("----------")
    setNextBrand(nextBrandName)
    setPreviousBrand(prevBrandName)
  }, [currentBrand])

  return { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab, gearArray, setArray, brandList, currentBrand, setCurrentBrand, setNextBrand, setPreviousBrand, modifyBrandName, previousBrand, nextBrand, getBrandId, getBrandNameById, goToNextBrand, goToPrevBrand, getBrandImage, nextCategory }
}

export default useHome;
