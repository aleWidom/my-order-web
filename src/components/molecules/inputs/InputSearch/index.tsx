import { ChangeEvent } from "react";
import styles from "./InputSearch.module.scss";

interface InputSearchProps {
  value: string,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}


export const InputSearch = ({value, handleChange}: InputSearchProps) => {
return (
      <input
        value={value}
        placeholder={"Buscar..."}
        className={styles.inputSearch}
        name="query"
        onChange={handleChange}
      />
  );
};



