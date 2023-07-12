  import React, { createContext, useState } from "react";
  import DisplayCardContainer from "./DisplayCardContainer";
  import FilterTab from "./FilterTab";
  import ShowItem from "./Showpage";
  import styles from "./stylesheets/App.module.css"

  export const HideFilterContext = React.createContext();
  export const HideShowContext = React.createContext();

  // const container = document.getElementById('root'); // Replace 'container' with the actual ID or selector for your container element

  // const containerHeight = container.offsetHeight;
  // console.log(containerHeight); // Output:

  function App() {
    const [hideFilter, setHideFilter] = useState(true);
    const [hideShowItem, setHideShowItem] = useState(true);

    function hideFilterTab (e) {
      if (!hideFilter && (e.pageX > 530 || e.pageY > 600 || e.pageY < 50)) {
        setHideFilter(true);
      }
    }

    return (
      <div onClick={(e) => hideFilterTab(e)}>
        <HideFilterContext.Provider value={[hideFilter, setHideFilter]}>
          <FilterTab/>
        </HideFilterContext.Provider>
        <div className={`${hideFilter ? '' : styles.blur}`}>
          <h1 style={{textAlign: "center"}}>Splatoon Shopfront</h1>
            <DisplayCardContainer />
        </div>
        <HideShowContext.Provider value={[hideShowItem, setHideShowItem]}>
          <ShowItem />
        </HideShowContext.Provider>
      </div>
    );
  }

  export default App;
