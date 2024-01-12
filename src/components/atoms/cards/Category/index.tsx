'use client'
import { useContext } from "react";
import { OrderContext, SearchContext } from "@/context";
import { CategoryRestaurant } from "@/interfaces";
import styles from "./Category.module.scss";


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
    <div onClick={handleClickCategory(category)} className={`${styles.buttonGral} ${category.name === categorySelected.name ? styles.selected : styles.notSelected}`} >
      <p>
        {category.name}
      </p>
    </div>
  );

};

