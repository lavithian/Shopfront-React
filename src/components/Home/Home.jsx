import React from "react";
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
  } = useHome();

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
        <DisplayCardContainer
          gearList={gearArray}
          brandList={brandList}
          setCurrentBrand={setCurrentBrand}
        />
      </div>
    </>
  );
}

export default Home;

// Use portals for the filter tab

// modals
// fragments
// memo
