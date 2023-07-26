import React from "react";
import DisplayCard from "./DisplayCard/DisplayCard";
import styles from "./DisplayCardContainer.module.css"
import useDisplayCardContainer from "./hooks/useDisplayCardContainer";

function DisplayCardContainer() {
  const { gearType, selectGearType, gearArray, currentIndex, gotoPrevious, gotoNext } = useDisplayCardContainer();

  // return (
  //   <>
  //     <div className={styles.displayCardContainer}>
  //      <div onClick={() => selectGearType("headgear")}>Headgear</div>
  //       <div onClick={() => selectGearType("clothing")}>Clothing</div>
  //       <div onClick={() => selectGearType("shoes")}>Shoes</div>
  //       <div onClick={() => selectGearType("all")}>All</div>

  //       {
  //         gearArray.map((gear) => (
  //           // <DisplayCard key={headgear.name} name={headgear.name} price={headgear.price} brand={headgear.brand} ability={headgear.ability} type="headgear"/>
  //           <DisplayCard key={gear.name} {...gear} />
  //         ))
  //       }
  //     </div>
  //   </>
  // );

  return (
    <div className={styles.displayCardContainer}>
      <div className={styles.logo} style={{backgroundColor: "orange"}}><h1>LOGO</h1></div>
      <div className={styles.previousItem} onClick={gotoPrevious}>
        {currentIndex === 0
            ? <DisplayCard key={gearArray[gearArray.length - 1].name} {...gearArray[gearArray.length - 1]} centre={false} />
            : <DisplayCard key={gearArray[currentIndex - 1].name} {...gearArray[currentIndex - 1]} centre={false}/>
          }
      </div>
      <div className={styles.cart} style={{backgroundColor: "lime"}}><h1>CART</h1></div>
      <div className={styles.previousBrand} onClick={gotoPrevious}>
        {currentIndex === 0
            ? <DisplayCard key={gearArray[gearArray.length - 1].name} {...gearArray[gearArray.length - 1]} centre={false}/>
            : <DisplayCard key={gearArray[currentIndex - 1].name} {...gearArray[currentIndex - 1]} centre={false} />
          }
      </div>
      <div className={styles.centrePiece}><DisplayCard key={gearArray[currentIndex].name} {...gearArray[currentIndex]} centre={true} /></div>
      <div className={styles.nextBrand} onClick={gotoNext}>
        {currentIndex === gearArray.length - 1
            ? <DisplayCard key={gearArray[0].name} {...gearArray[0]} centre={false}/>
            : <DisplayCard key={gearArray[currentIndex + 1].name} {...gearArray[currentIndex + 1]} centre={false}/>
          }
      </div>
      <div className={styles.emptyLeft}  style={{backgroundColor: "black", color: "white"}}><h1>EMPTY</h1></div>
      <div className={styles.nextItem} onClick={gotoNext}>
        {currentIndex === gearArray.length - 1
            ? <DisplayCard key={gearArray[0].name} {...gearArray[0]} />
            : <DisplayCard key={gearArray[currentIndex + 1].name} {...gearArray[currentIndex + 1]} centre={false} />
          }
      </div>
      <div className={styles.emptyRight} style={{backgroundColor: "black", color: "white"}}><h1>EMPTY</h1></div>
    </div>

  )
}

export default DisplayCardContainer;
