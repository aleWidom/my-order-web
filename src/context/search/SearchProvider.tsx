"use client"
import { useState } from "react";
import { SearchContext } from "./SearchContext";
import { PlateRestaurant, ModalInfo, CategoryRestaurant } from "../../interfaces";


interface Props {
  children: JSX.Element | JSX.Element[];
}

export const SearchProvider = ({ children }: Props) => {
  const [valueInput, setValueInput] = useState<string>("");

  const [results, setResults] = useState<PlateRestaurant[] | []>([]);

  const [categorySelected, setCategorySelected] = useState<CategoryRestaurant>({
    CategoryID: '0',
    name: "",
    photo: "",
  });

  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    description: "",
    state: false,
    section: ""
  })

  return (
    <SearchContext.Provider
      value={{
        valueInput,
        setValueInput,
        results,
        setResults,
        categorySelected, 
        setCategorySelected,
        modalInfo,
        setModalInfo
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
