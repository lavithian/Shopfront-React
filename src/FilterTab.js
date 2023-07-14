import React, { useState, useContext } from "react";
import styles from "./stylesheets/FilterTab.module.css";
import { HideFilterContext } from "./components/App/App";

function FilterTab(props) {
  const [searchInput, setSearchInput] = useState('');
  const [hideFilter, setHideFilter] = useContext(HideFilterContext);
  const container = document.getElementById('display');

  function handleChange (e) {
    e.preventDefault();
    setSearchInput(e.target.value);
    // if (searchInput.length > 0) {
    //   filter list
    // }

  }

  function closeFilterTab (e) {
    if (!hideFilter && (e.pageX > container.offsetWidth || e.pageY > container.offsetHeight || e.pageY < container.offsetHeight)) {
      console.log(hideFilter);
      setHideFilter(true);
    } else {
      console.log(hideFilter);
      setHideFilter(false);
    }
  }

  function filterHeadgear () {

  }

  function filterClothing () {

  }

  function filterShoes () {

  }

  function filterBrand() {

  }

  return (
    <div className={`${styles.filter} ${hideFilter ? styles.hideFilter : ''}`} onClick={() => setHideFilter(false)} id="filter">
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
