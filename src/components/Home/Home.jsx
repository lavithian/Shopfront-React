import React from "react";
import useHome from "./hooks/useHome";
import styles from "./Home.module.css";

import SearchTab from "../SearchTab";
import DisplayCardContainer from "../DisplayCardContainer";

function Home () {
  const { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab } = useHome();

  return (
    <>
      <div style={isSearchTabOpen ? {filter: "blur(10px)"} : {}}>
        {/* <div onClick={(e) => closeSearchTab(e)}><SearchTab isSearchTabOpen={isSearchTabOpen} setIsSearchTabOpen={setIsSearchTabOpen}/></div> */}
        <DisplayCardContainer />
      </div>
    </>
  );
}

export default Home;


// Use portals for the filter tab

// modals
// fragments
// memo
