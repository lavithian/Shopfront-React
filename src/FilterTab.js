import React, { useState, useContext } from "react";
import styles from "./stylesheets/FilterTab.module.css";
import { HideFilterContext } from "./App";

function FilterTab(props) {
  const [searchInput, setSearchInput] = useState('');
  const [hideFilter, setHideFilter] = useContext(HideFilterContext);

  function handleChange (e) {
    e.preventDefault();
    setSearchInput(e.target.value);
    // if (searchInput.length > 0) {
    //   filter list
    // }

  }

  // const handleClickOutside = e => {
  //   if (node.current.contains(e.target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click
  //   setHideFilter(true);
  // };

  // // useEffect(() => {
  //   // Attach the listeners on component mount.
  //   document.addEventListener("mousedown", handleClickOutside);

  //   // Detach the listeners on component unmount.
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [hideFilter]);


  function filterHeadgear () {

  }

  function filterClothing () {

  }

  function filterShoes () {

  }

  function filterBrand() {

  }

  return (
    <div className={`${styles.filter} ${hideFilter ? styles.hideFilter : ''}`} onClick={() => setHideFilter(false)}>
      Search Bar
      <div className={styles.searchBar}>
        <input type="text"
          placeholder="Search here"
          value={searchInput}
          onChange={handleChange}
        />🔍
      </div>
      Gear Types
      <form className={styles.gearTypes}>
        <div>
          <label htmlFor="headgear">Headgear</label>
          <input type="checkbox" name="headgear"/>
        </div>
        <div>
          <label htmlFor="clothing">Clothing</label>
          <input type="checkbox" name="clothing"/>
        </div>
        <div>
          <label htmlFor="shoes">Shoes</label>
          <input type="checkbox" name="shoes"/>
        </div>
      </form>
      Brands
      <form className={styles.brands}>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <div>
          <label htmlFor="Annaki">Annaki</label>
          <input type="checkbox" name="Annaki" />
        </div>
        <input type="submit"/>
      </form>
    </div>

  );
}

export default FilterTab;
