import React from "react";
import ReactDOM from "react-dom";
import styles from "./SearchTab.module.css";

function SearchTab({ isSearchTabOpen: isOpen, setIsSearchTabOpen: setIsOpen, children }) {
  return ReactDOM.createPortal (
    <>
      <div className={isOpen ? styles.overlay : ""} />
      <div className={styles.searchTab} style={isOpen ? {left: 0} : {left: "-40vw"}} onClick={() => setIsOpen(true)} id="searchtab">
        Search Bar
        <div className={styles.searchBar}>
          <input type="text"
            placeholder="Search here"
            // value={searchInput}
            // onChange={handleChange}
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
        brand
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
    </>,
    document.getElementById("portal")
  );
}

export default SearchTab;
