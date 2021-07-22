import { useEffect, useState } from "react";
import styles from "../../../styles/Pokedex.module.css";

import { FiSearch } from "react-icons/fi";

export function Pokedex() {
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
      const fetchData = async () => {
        const array = await pokemonURL.forEach((item) => {
          fetch(item)
            .then((response) => {
              return response.json();
            })
            .then((pokemons) => {});
          setPokemonList(array);
        });
      };
      fetchData();
    }
  }, [pokemonURL]);
  console.log(pokemonList);

  return (
    <>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input type="text" className={styles.input} placeholder="Pesquisar" />
          <button type="submit" className={styles.submitButton}>
            <FiSearch />
          </button>
        </form>
        <div className={styles.screen}>
          {/* {pokemonList.map((item) => {
            <div>{item.name}</div>;
          })} */}
        </div>
      </div>
    </>
  );
}
