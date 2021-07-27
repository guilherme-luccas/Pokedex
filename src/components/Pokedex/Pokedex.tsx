import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Pokedex.module.css";
import { Grid } from "../../components/Grid/Grid";

import { FiSearch } from "react-icons/fi";
import { SearchContext } from "../../SearchContext";

export function Pokedex() {
  const { setSearch } = useContext(SearchContext);

  return (
    <>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Pesquisar"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className={styles.submitButton}>
            <FiSearch />
          </button>
        </form>
        <Grid />
      </div>
    </>
  );
}
