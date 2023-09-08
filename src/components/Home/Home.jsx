import React, { useEffect } from "react";
import useHome from "./hooks/useHome";
import styles from "./Home.module.scss";
import SearchTab from "../SearchTab";
import DisplayCardContainer from "../DisplayCardContainer";
import BrandLogo from "../BrandLogo";
import Cart from "../Cart";
import CategorySwitch from "../CategorySwitch";
import searchIcon from "../../data/images/search.svg"

function Home() {
  const {
    brandList,
    closeSearchTab,
    currentBrand,
    gearArray,
    isSearchTabOpen,
    setArray,
    setCurrentBrand,
    setIsSearchTabOpen,
    modifyBrandName,
    previousBrand,
    setPreviousBrand,
    nextBrand,
    setNextBrand,
    getBrandNameById,
    getBrandId,
    goToNextBrand,
    goToPrevBrand,
    getBrandImage,
    nextCategory
  } = useHome();


  const searchIconStyle = {
    backgroundImage: `url(${searchIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "45%",
    height: "100%",
  }

  return (
    <div
      style={
        isSearchTabOpen
          ? { filter: "blur(10px)", backgroundColor: `#${currentBrand}` }
          : { backgroundColor: `#${currentBrand}` }
      }
      className={`${styles.homeWrapper}`}
    >
      <div className={`${styles.previousBrand} ${styles.brandButton}`} onClick={goToPrevBrand}>
        ▲{previousBrand}▲
      </div>
      <div className={`${styles.nextBrand} ${styles.brandButton}`} onClick={goToNextBrand}>
        ▼{nextBrand}▼
      </div>
      <div className={`${styles.logo} ${styles.corners}`}>
        <BrandLogo image={getBrandImage(currentBrand)}/>
      </div>
      <div className={`${styles.cart} ${styles.corners}`}>
        <Cart />
      </div>
      {/* <div className={`${styles.search} ${styles.corners}`}>Search</div> */}
      <div className={`${styles.search} ${styles.corners}`} onClick={(e) => closeSearchTab(e)} >
        <SearchTab isSearchTabOpen={isSearchTabOpen} setIsSearchTabOpen={setIsSearchTabOpen}/><div style={searchIconStyle}/>
      </div>
      <div
        className={`${styles.switch} ${styles.corners}`}
        onClick={setArray}
      >
        <CategorySwitch nextCategory={nextCategory} />
      </div>
      <div className={styles.carousel}>
        <DisplayCardContainer
          gearList={gearArray[currentBrand]}
          currentBrand={currentBrand}
          setCurrentBrand={setCurrentBrand}
        />
      </div>
    </div>
  );
}

export default Home;

// Use portals for the filter tab

// modals
// fragments
// memo
