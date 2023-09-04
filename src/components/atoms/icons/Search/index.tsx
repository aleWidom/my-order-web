"use client"
import { useContext } from "react";
import { SearchContext } from "../../../../context";
import { getItemsResults } from "../../../../services";
import { SearchView } from "./SearchView";

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
                photo: "https://prima-med.org/wp-content/uploads/2022/06/Result-SSC.jpg",
              }
            );
          }
        })
        .catch((err) => err);
    }
  };

  return (
    <SearchView handleSubmit={handleSubmit}/>
  );
};
