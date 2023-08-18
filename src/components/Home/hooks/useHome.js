import { useState } from "react";
import headgearData from "../../../data/headgear/index";
import clothingData from "../../../data/clothing/index";
import shoesData from "../../../data/shoes/index";
import brandList from "../../../data/master/brands.json";

const useHome = () => {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const [gearArray, setGearArray] = useState(headgearData)
  const [currentBrand, setCurrentBrand] = useState("Annaki")
  const [previousBrand, setPreviousBrand] = useState();
  const [nextbrand, setNextbrand] = useState()


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

  // function getBrandId(brandName) {
  //   let modifiedBrandName = modifyBrandName(brandName);

  //   for (const brandObj of brandList) {
  //     if (brandObj.brand === modifiedBrandName) {
  //       return brandObj.id;
  //     }
  //   }

  //   return null; // Return null if the brand is not found
  // }

  function getBrandNameById(id) {
    for (const brandObj of brandList) {
      if (brandObj.id === id) {
        return brandObj.brand;
      }
    }
    return null; // Return null if the ID is not found
  }

  function getPreviousBrand (currentBrand) {
    // find the id of the current brand

    if (currentBrand === 'amiibo') {
      return getBrandNameById(21);
    }
    return getBrandNameById(currentBrand - 1);
  }

  function getNextBrand () {
    if (currentBrand === 'Zink') {
      return getBrandNameById(1);
    }
    return getBrandNameById(currentBrand + 1);
  }

  function closeSearchTab (e) {
    if (isSearchTabOpen && e.target.id !== "searchtab") {
      setIsSearchTabOpen(false);
    };
  }

  return { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab, gearArray, setArray, brandList, currentBrand, setCurrentBrand, getNextBrand, getPreviousBrand }
}

export default useHome;
