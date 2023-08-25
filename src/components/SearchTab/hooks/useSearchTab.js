// import headgearData from "@/data/headgear/index";
// import headgearData from "../../../data/headgear/index";
import headgearData from "/home/treece/code/React/Shopfront/src/data/headgear/index";
// import clothingData from "@/clothing/index";
import clothingData from "../../../data/clothing/index";
// import shoesData from "@/shoes/index";
import shoesData from "../../../data/shoes/index";
// import brandList from "@/master/brands.json";
import brandList from "../../../data/master/brands.json";
import { useState } from "react";

// "/home/treece/code/React/Shopfront/src/data/headgear/index"
// "/home/treece/code/React/Shopfront/src/data/headgear/index"

function useSearchTab() {
  // const [searchInput, setSearchInput] = useState('');
  // const [hideFilter, setHideFilter] = useContext(HideFilterContext);
  // const container = document.getElementById('display');

  function handleChange (e) {
    e.preventDefault();
    // setSearchInput(e.target.value);
    // if (searchInput.length > 0) {
    //   filter list
    // }

  }

  // function closeFilterTab (e) {
  //   if ((e.pageX > container.offsetWidth || e.pageY > container.offsetHeight || e.pageY < container.offsetHeight)) {
  //     // console.log(hideFilter);
  //     // setHideFilter(true);
  //   } else {
  //     // console.log(hideFilter);
  //     // setHideFilter(false);
  //   }
  // }

  function filterHeadgear () {

  }

  function filterClothing () {

  }

  function filterShoes () {

  }

  function filterBrand() {

  }

  return {  }
}

export default useSearchTab
