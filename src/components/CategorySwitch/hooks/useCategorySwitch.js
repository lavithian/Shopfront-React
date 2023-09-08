import shirtIcon from "../../../data/images/shirt.png";
import shoesIcon from "../../../data/images/shoes.png";
import headgearIcon from "../../../data/images/headgear.svg";

function useCategorySwitch() {

  function setIcon (nextCategory) {
    if (nextCategory === "shirt") {
      return shirtIcon
    } else if (nextCategory === "shoes") {
      return shoesIcon
    } else if (nextCategory === "headgear") {
      return headgearIcon
    } else {
      console.log("Category Switch Icon error");
      return null;
    }
  }

  return { setIcon };

}

export default useCategorySwitch
