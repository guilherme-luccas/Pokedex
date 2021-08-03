import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [zoomIn, setZoomIn] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});

  function ZoomIn(e) {
    setPokemonSelected(e);

    if (zoomIn == false) {
      setZoomIn(true);
    } else {
      setZoomIn(false);
    }
  }
  return (
    <SearchContext.Provider
      value={{ search, setSearch, zoomIn, setZoomIn, ZoomIn, pokemonSelected }}
    >
      {children}
    </SearchContext.Provider>
  );
}
