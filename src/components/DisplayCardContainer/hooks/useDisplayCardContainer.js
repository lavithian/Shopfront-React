function useDisplayCardContainer () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    // vertical: true,
    // verticalSwiping: true,
    // afterChange: () => setUpdateCount(prevCount => prevCount + 1),
    // beforeChange: (current, next) => setCurrentSlide(next)
  };


  return { settings };
}

export default useDisplayCardContainer;
