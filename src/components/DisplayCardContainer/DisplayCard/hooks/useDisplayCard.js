import brandList from "../../../../data/master/brands.json"

const useDisplayCard = (props) => {
  function findBrandColour(brand) {
    for (const brandObj of brandList) {
      if (brandObj.brand === brand) {
        return "#" + brandObj.colour;
      }
    }

    return "#ffffff"
  }

  function invertColour(colour) {
    colour = colour.replace(/^#/, '');
    return `#${(0xFFFFFF ^ parseInt(colour, 16)).toString(16)}`
  }

  return { findBrandColour, invertColour }
}

export default useDisplayCard;
