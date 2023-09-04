import { useEffect, useState, useRef } from "react";

function useDisplayCardContainer () {

  const carouselScroll = useRef(null);
  const cardClick = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  // const itemWidth =carouselScroll.current.offsetWidth / itemList.length;
  // const totalScrollWidth = itemWidth * itemList.length;


  const dragStart = (e) => {
    // console.log("Mouse is down");
    setIsDragging(true);
    setStartX(e.pageX)
    setStartScrollLeft(carouselScroll.current.scrollLeft)
  }

  const dragEnd = (e) => {
    // console.log("Mouse is up");
    setIsDragging(false);
  }

  const dragging = (e) => {
    if (!isDragging) return ;
    carouselScroll.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    e.preventDefault();
  }

  const onCardClick = (e, index) => {
    const cardWidth = cardClick.current.offsetWidth;
    const carouselWidth = carouselScroll.current.offsetWidth;

    const clickedCardLeft = index * cardWidth;
    const halfCarouselWidth = carouselWidth / 2;

    const targetScrollLeft = clickedCardLeft - halfCarouselWidth + cardWidth / 2;

    carouselScroll.current.scrollLeft = targetScrollLeft;
  }

  const prepareArray = (array) => {
    console.log(array);
    let newArray = [array[array.length - 2], array[array.length - 1], ...array, array[0], array[1]]
    console.log(newArray);
    return newArray
  }

  useEffect(() => {
    // Your code here will run before the page loads
    // console.log('Component is about to mount');
    // setItemList(prepareArray(gearArray[currentBrand]));
    if (carouselScroll.current.scrollLeft === 0) {
      console.log("End of scroll");
    }
    // Return a cleanup function if needed
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return { dragStart, dragEnd, dragging, onCardClick, isDragging, carouselScroll, cardClick };
}

export default useDisplayCardContainer;
