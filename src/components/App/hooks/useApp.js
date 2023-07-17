import { useState } from "react";

const useApp = (props) => {
  const [hideFilter, setHideFilter] = useState(true);
  const [hideShowItem, setHideShowItem] = useState(true);
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);

  const sideTab = document.getElementById('filter');
  const showPage = document.getElementById('show');

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

  function closeSearchTab (e) {
    if (isSearchTabOpen && e.target.id !== "searchtab") {
      setIsSearchTabOpen(false);
    };
  }


  return { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab }
  // return {closeTabs, hideFilter, hideShowItem, setHideFilter, setHideShowItem}
}

export default useApp;
