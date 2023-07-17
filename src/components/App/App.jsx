import React, { useState } from "react";
import useApp from "./hooks/useApp";
import styles from "./App.module.css";

import SearchTab from "../SearchTab";
import DisplayCardContainer from "../DisplayCardContainer";

export const HideFilterContext = React.createContext();
export const HideShowContext = React.createContext();

function App () {
  const { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab } = useApp();

  return (
    <div>
      <div style={isSearchTabOpen ? {filter: "blur(10px)"} : {}}>
        <h1 style={{backgroundColor: "red"}}>Hello</h1>
        <div onClick={(e) => closeSearchTab(e)}><SearchTab isSearchTabOpen={isSearchTabOpen} setIsSearchTabOpen={setIsSearchTabOpen}/></div>
        <DisplayCardContainer />
      </div>
    </div>
  );
}

export default App;

// Use portals for the filter tab

// modals
// fragments
// memo
{/* <div className={`${hideFilter && hideShowItem ? '' : styles.blur}`}></div> */}
      {/* <HideFilterContext.Provider value={ [hideFilter, setHideFilter] }>
        <div><FilterTab/></div>
      </HideFilterContext.Provider> */}
      {/* <HideShowContext.Provider value={[hideShowItem, setHideShowItem]}> */}
        {/* <h1 style={{textAlign: "center"}}>Splatoon Shopfront</h1> */}
          {/* <DisplayCardContainer /> */}
        {/* <ShowItem key="Hat" name="Annaki_Hat" price={1000} brand="Annaki" ability="Swim Speed Up" type="Headgear"/> */}
      {/* </HideShowContext.Provider> */}
