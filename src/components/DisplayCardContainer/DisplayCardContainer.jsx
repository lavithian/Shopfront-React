import React from "react";
import styles from "./DisplayCardContainer.module.scss";
import useDisplayCardContainer from "./hooks/useDisplayCardContainer";
import DisplayCard from "./DisplayCard/DisplayCard";


function DisplayCardContainer({ gearList }) {
  const { dragStart, dragEnd, dragging, onCardClick, isDragging, carouselScroll, cardClick } = useDisplayCardContainer();

  return (
    <div className={styles.container}>
      <ul className={`${styles.carousel}`} style={!isDragging ? { scrollSnapType: "x mandatory", scrollBehavior: "smooth", scrollSnapAlign: "start"} : {}} ref={carouselScroll} onMouseMove={dragging} onMouseDown={dragStart} onMouseUp={dragEnd}>
      {
        gearList.map((item, index) => (
          <li key={index} className={styles.card} ref={cardClick} onClick={(e) => onCardClick(e, index)}>
            <DisplayCard {...item} />
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default DisplayCardContainer;
