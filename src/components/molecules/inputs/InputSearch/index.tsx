'use client'
import styles from "./InputSearch.module.scss";


export const InputSearch = () => {
  return (
      <input
        defaultValue={''}
        placeholder={"Buscar..."}
        className={styles.inputSearch}
        name="query"
      />
  );
};



