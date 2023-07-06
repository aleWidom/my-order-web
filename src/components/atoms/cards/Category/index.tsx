import { useContext } from "react";
import { OrderContext, SearchContext } from "@/context";
import { CategoryView } from "./CategoryView";
import { CategoryRestaurant } from "@/interfaces";


const selected = {
  backgroundColor: "#fff",
  border: "solid 1px #fff" 
}

const notSelected = {
  backgroundColor: "#181818",
  border: "solid 1px #fff",
  color: "#fff" 
}

interface Props {
  category: CategoryRestaurant,
}


export const Category = ({ category }: Props) => {

  const { itemsRestaurant } = useContext(OrderContext);

  const { categorySelected, setValueInput, setCategorySelected, setResults } = useContext(SearchContext);

  const handleClickCategory = (cardSelected: CategoryRestaurant) => () => {

    const resultsCategory = itemsRestaurant.filter((item) => {
      return item.id_category === cardSelected.CategoryID
    })
    setCategorySelected(cardSelected);
    setResults(resultsCategory);
    setValueInput('');

  };

  return (
    <CategoryView category={category} handleClick={handleClickCategory} 
    styleButton={category.name === categorySelected.name ? selected : notSelected}/>
  );

};

