import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Grid.module.css";
import { SearchContext } from "../../SearchContext";
import { CardGrid } from "../CardGrid/CardGrid";

type MapPokemonProps = {
  name: string;
  sprites: string;
  types: any;
};

export function Grid() {
  const { search, zoomIn, ZoomIn, pokemonSelected } = useContext(SearchContext);

  const [pokemonList, setPokemonList] = useState([] as any);
  const [pokemonURL, setPokemonURL] = useState([] as any);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((lista: any) => {
        const data = lista.results;
        let array: any = [];
        Promise.all(
          data.map((item: any) => {
            array.push(item.url);
          })
        );
        setPokemonURL(array);
      });
  }, []);

  useEffect(() => {
    if (pokemonURL.length > 0) {
      Promise.all(pokemonURL.map((url: any) => fetch(url)))
        .then((responses) =>
          Promise.all(responses.map((res: any) => res.json()))
        )
        .then((res: any) => {
          setPokemonList(res);
        });
    }
  }, [pokemonURL]);

  function MapPokemon() {
    return (
      <div className={styles.gridScreen}>
        {pokemonList
          .filter((val: any) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((pokemon: any, index: any) => {
            return (
              <div
                key={index}
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
