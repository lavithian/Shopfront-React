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

export default {
  handleChange,
  closeFilterTab
}
