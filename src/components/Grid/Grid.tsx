import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Grid.module.css";
import { SearchContext } from "../../SearchContext";
import { CardGrid } from "../CardGrid/CardGrid";

export function Grid() {
  const { search, zoomIn, ZoomIn, pokemonSelected } = useContext(SearchContext);

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonURL, setPokemonURL] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((lista) => {
        const data = lista.results;
        let array = [];
        Promise.all(
          data.map((item) => {
            array.push(item.url);
          })
        );
        setPokemonURL(array);
      });
  }, []);

  useEffect(() => {
    if (pokemonURL.length > 0) {
      Promise.all(pokemonURL.map((url) => fetch(url)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((res) => {
          setPokemonList(res);
        });
    }
  }, [pokemonURL]);

  function MapPokemon() {
    return (
      <div className={styles.gridScreen}>
        {pokemonList
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((pokemon, index) => {
            return (
              <div
                data-index={index}
                onClick={() => {
                  ZoomIn(pokemon);
                }}
              >
                <CardGrid
                  key={index}
                  image={pokemon.sprites.front_default}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      {zoomIn ? (
        <div onClick={ZoomIn} className={styles.gridScreen}>
          {pokemonSelected.name}
        </div>
      ) : (
        <MapPokemon />
      )}
    </div>
  );
}
