import React from "react";
import DisplayCardContainer from "../../DisplayCard";
import FilterTab from "../../FilterTab";
import ShowItem from "../../Showpage";
import styles from "./App.module.css"
import useApp from "./hooks/useApp";

export const HideFilterContext = React.createContext();
export const HideShowContext = React.createContext();

function App() {
  const {closeTabs, hideFilter, hideShowItem, setHideFilter, setHideShowItem} = useApp();

  return (
    <div onClick={(e) => {closeTabs(e)}}>
      <div className={`${hideFilter && hideShowItem ? '' : styles.blur}`}>
      </div>
    {/* <div ref={appRef}> */}
      <HideFilterContext.Provider value={[hideFilter, setHideFilter]}>
        <div><FilterTab/></div>
      </HideFilterContext.Provider>
      <HideShowContext.Provider value={[hideShowItem, setHideShowItem]}>
        <h1 style={{textAlign: "center"}}>Splatoon Shopfront</h1>
          <DisplayCardContainer />
        {/* <ShowItem key="Hat" name="Annaki_Hat" price={1000} brand="Annaki" ability="Swim Speed Up" type="Headgear"/> */}
      </HideShowContext.Provider>
    </div>
  );
}

export default App;

// modals
// fragments
// memo
