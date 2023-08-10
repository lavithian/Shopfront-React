import abilityList from "../../../data/master/abilities.json"
import brandList from"../../../data/master/brands.json"

function useShowPage () {

  function getAbilityImageByName(name) {
    for (const abilityObj of abilityList) {
      if (abilityObj.name === name) {
        return abilityObj.image;
      }
    }
    return null;
  }

  function getBrandImageByName(name) {
    for (const brandObj of brandList) {
      if (brandObj.brand === name) {
        return brandObj.image;
      }
    }
    return null;
  }

  return { getAbilityImageByName, getBrandImageByName }
}

export default useShowPage
