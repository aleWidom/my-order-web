"use client"
import { useContext } from "react";
import { OrderContext, SearchContext } from "../../../../context";

import { InputSearchView } from "./InputSearchView";

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
    <InputSearchView handleChange={handleChange} handleFocus={handleFocus} valueInput={valueInput}/>
  );
};
