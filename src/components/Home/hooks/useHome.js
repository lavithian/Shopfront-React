import { useState } from "react";

const useHome = () => {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);

  function closeSearchTab (e) {
    if (isSearchTabOpen && e.target.id !== "searchtab") {
      setIsSearchTabOpen(false);
    };
  }

  return { isSearchTabOpen, setIsSearchTabOpen, closeSearchTab }
}

export default useHome;
