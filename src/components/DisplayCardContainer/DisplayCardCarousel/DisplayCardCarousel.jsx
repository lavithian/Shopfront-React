import React from 'react'
import Slider from 'react-slick'
import "./slick.css";
import "./slick-theme.css";
import DisplayCard from '../DisplayCard/DisplayCard'
import useDisplayCardCarousel from './hooks/useDisplayCardCarousel'

function DisplayCardCarousel({ itemList }) {
  const { settings } = useDisplayCardCarousel();
  if (!itemList) {
    return null;
  }

  return (
    <>
      {
        <Slider {...settings}>
          {itemList.map((item) => (
            <DisplayCard key={item.name} {...item} />
          ))}
        </Slider>
      }
      {/* <DisplayCard /> */}

    </>
  )
}

export default DisplayCardCarousel
