"use client"
import { useContext } from "react";
import { OrderContext, SearchContext } from "../../../../context";
import styles from "./InputSearch.module.scss";

export const InputSearch = () => {

  const { setMenuWaiterActive } = useContext(OrderContext);

  const { valueInput, setValueInput } = useContext(SearchContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setMenuWaiterActive(false);
  };

  return (
    <input
      onChange={handleChange}
      onFocus={handleFocus}
      value={valueInput}
      placeholder={"Buscar..."}
      className={styles.inputSearch}
    />
  );
};






