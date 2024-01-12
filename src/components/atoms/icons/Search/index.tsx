"use client"
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../../../../context";
import { getItemsResults } from "../../../../services";
import styles from "./Search.module.scss";


export const Search = () => {
  
  const { valueInput, setValueInput, setResults, setCategorySelected, setModalInfo } =

    useContext(SearchContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (valueInput.length === 0) {
      setModalInfo({
        description: "Debe ingresar una palabra.",
        state: true,
        section: "form"
      })
    } else {
      getItemsResults(valueInput)
        //TODO DATA NO DEBE SER ANY
        .then(({ data }: any) => {
          if (data) {
            if (data.length === 0) {
              setModalInfo({
                description: "No hay elementos que coincidan con la búsqueda.",
                state: true,
                section: "form"
              })
              setValueInput("");
            } else {
              setResults(data);
              setCategorySelected(
                {
                  CategoryID: '0',
                  name: "",
                  photo: "",
                }
              );
            }
          }
        })
        .catch((err) => err);
    }
  };

  return (
    <button onClick={handleSubmit} className={styles.button}>
      <FaSearch />
    </button>
  );
};




