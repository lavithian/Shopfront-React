import { useState } from "react";

const useApp = (props) => {
  const [hideFilter, setHideFilter] = useState(true);
  const [hideShowItem, setHideShowItem] = useState(true);

  const sideTab = document.getElementById('filter');
  const showPage = document.getElementById('show');

  // const appRef = useRef(null);


  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (appRef.current && !appRef.current.contains(event.target)) {
  //       setHideFilter(true);
  //       setHideShowItem(true);
  //     }
  //   };

  //   console.log(`Search tab: ${hideFilter}`);
  //   console.log(`Show tab: ${hideShowItem}`);

  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);


  // function closeTabs (e) {
  //   if (!hideShowItem && (e.pageX > showPage.offsetWidth || e.pageY > showPage.offsetHeight || e.pageY < showPage.offsetHeight)) {
  //     setHideShowItem(true)
  //   }
  //   if (!hideFilter && (e.pageX > sideTab.offsetWidth || e.pageY > sideTab.offsetHeight || e.pageY < sideTab.offsetHeight)) {
  //     setHideFilter(true)
  //   }
  //   console.log(`Search tab: ${hideFilter}`);
  //   console.log(e);
  //   console.log(`Show tab: ${hideShowItem}`);
  // }

    function closeTabs (e) {
    if (!hideShowItem && e.target.id !== "show") {
      // if (hideFilter) {
      //   setHideFilter(true)
      // }
      setHideShowItem(true)
    }
    if (!hideFilter && e.target.id !== "filter") {
      setHideFilter(true)
    }
    console.log(`Search tab: ${hideFilter}`);
    console.log(e);
    console.log(`Show tab: ${hideShowItem}`);
  }
  return {closeTabs, hideFilter, hideShowItem, setHideFilter, setHideShowItem}
}

export default useApp;
