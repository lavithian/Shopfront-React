import React, { useEffect } from "react";
import useHome from "./hooks/useHome";
import styles from "./Home.module.css";
import SearchTab from "../SearchTab";
import DisplayCardContainer from "../DisplayCardContainer";
import BrandLogo from "../BrandLogo";
import Cart from "../Cart";
import CategorySwitch from "../CategorySwitch";

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
  } = useHome();

  useEffect(() => {
    const maxId = brandList.length
    const num = getBrandId(currentBrand)
    const nextID = num + 1 > maxId ? 1 : num + 1
    const prevID = num - 1 < 1 ? maxId : num - 1;
    const nextBrandName = modifyBrandName(getBrandNameById(nextID));
    const prevBrandName = modifyBrandName(getBrandNameById(prevID));
    setNextBrand(nextBrandName)
    setPreviousBrand(prevBrandName)
  }, [currentBrand])

  return (
    <>
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
          <BrandLogo currentBrand={currentBrand} />
        </div>
        <div className={`${styles.cart} ${styles.corners}`}>
          <Cart />
        </div>
        <div className={`${styles.search} ${styles.corners}`}>Search</div>
        {/* <div onClick={(e) => closeSearchTab(e)}><SearchTab isSearchTabOpen={isSearchTabOpen} setIsSearchTabOpen={setIsSearchTabOpen}/></div> */}
        <div
          className={`${styles.switch} ${styles.corners}`}
          onClick={setArray}
        >
          <CategorySwitch />
        </div>
        <div className={styles.carousel}>
          <DisplayCardContainer
            gearList={gearArray[currentBrand]}
            currentBrand={currentBrand}
            setCurrentBrand={setCurrentBrand}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

// Use portals for the filter tab

// modals
// fragments
// memo
