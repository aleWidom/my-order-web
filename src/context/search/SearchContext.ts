"use client"
import { createContext } from "react";
import { PlateRestaurant, ModalInfo, CategoryRestaurant } from "../../interfaces";

interface ContextProps {
  valueInput: string;
  setValueInput: (description: string) => void;
  results: PlateRestaurant[];
  setResults: (description: PlateRestaurant[] | []) => void;
  categorySelected: CategoryRestaurant ;
  setCategorySelected: (description: CategoryRestaurant ) => void;
  modalInfo: ModalInfo, 
  setModalInfo: (description: ModalInfo) => void;
}

export const SearchContext = createContext({} as ContextProps);
