  // import React, { createContext, useState } from "react";
  // import DisplayCardContainer from "./DisplayCardContainer";
  // import FilterTab from "./FilterTab";
  // import ShowItem from "./Showpage";
  // // import styles from "./stylesheets/App.module.css"

  // export const HideFilterContext = React.createContext();
  // export const HideShowContext = React.createContext();

  // // ASK OLIVER

  // // console.log(containerHeight); // Output:

  // function App() {
  //   const [hideFilter, setHideFilter] = useState(true);
  //   const [hideShowItem, setHideShowItem] = useState(true);

  //   const sideTab = document.getElementById('filter');
  //   const showPage = document.getElementById('show');

  //   // const appRef = useRef(null);


  //   // useEffect(() => {
  //   //   const handleOutsideClick = (event) => {
  //   //     if (appRef.current && !appRef.current.contains(event.target)) {
  //   //       setHideFilter(true);
  //   //       setHideShowItem(true);
  //   //     }
  //   //   };

  //   //   console.log(`Search tab: ${hideFilter}`);
  //   //   console.log(`Show tab: ${hideShowItem}`);

  //   //   document.addEventListener("click", handleOutsideClick);

  //   //   return () => {
  //   //     document.removeEventListener("click", handleOutsideClick);
  //   //   };
  //   // }, []);


  //   // function closeTabs (e) {
  //   //   if (!hideShowItem && (e.pageX > showPage.offsetWidth || e.pageY > showPage.offsetHeight || e.pageY < showPage.offsetHeight)) {
  //   //     setHideShowItem(true)
  //   //   }
  //   //   if (!hideFilter && (e.pageX > sideTab.offsetWidth || e.pageY > sideTab.offsetHeight || e.pageY < sideTab.offsetHeight)) {
  //   //     setHideFilter(true)
  //   //   }
  //   //   console.log(`Search tab: ${hideFilter}`);
  //   //   console.log(e);
  //   //   console.log(`Show tab: ${hideShowItem}`);
  //   // }

  //     function closeTabs (e) {
  //     if (!hideShowItem && e.target.id !== "show") {
  //       // if (hideFilter) {
  //       //   setHideFilter(true)
  //       // }
  //       setHideShowItem(true)
  //     }
  //     if (!hideFilter && e.target.id !== "filter") {
  //       setHideFilter(true)
  //     }
  //     console.log(`Search tab: ${hideFilter}`);
  //     console.log(e);
  //     console.log(`Show tab: ${hideShowItem}`);
  //   }


  //   return (
  //     <div onClick={(e) => {closeTabs(e)}}>
  //     {/* <div ref={appRef}> */}
  //       <HideFilterContext.Provider value={[hideFilter, setHideFilter]}>
  //         <div><FilterTab/></div>
  //       </HideFilterContext.Provider>
  //       <HideShowContext.Provider value={[hideShowItem, setHideShowItem]}>
  //       <div className={`${hideFilter && hideShowItem ? '' : styles.blur}`}>
  //         <h1 style={{textAlign: "center"}}>Splatoon Shopfront</h1>
  //           <DisplayCardContainer />
  //       </div>
  //         <ShowItem key="Hat" name="Annaki_Hat" price={1000} brand="Annaki" ability="Swim Speed Up" type="Headgear"/>
  //       </HideShowContext.Provider>
  //     </div>
  //   );
  // }

  // export default App;
