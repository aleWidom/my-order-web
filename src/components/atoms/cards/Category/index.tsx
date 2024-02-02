import { useCategoriesStore, useItemsStore} from '@/store';
import { CategoryRestaurant } from "@/interfaces";
import styles from "./Category.module.scss";
import { useSearchStore } from '@/store/search-store';


interface CategoryProps {
  category: CategoryRestaurant,
}


export const Category = ({ category }: CategoryProps) => {

  const categorySelected = useCategoriesStore(state => state.categorySelected)

  const setCategorySelected = useCategoriesStore(state => state.setCategorySelected)

  const setPlates = useItemsStore(state => state.setPlates) 

  const setQuery = useSearchStore(state=> state.setQuery)

  const handleClickCategory = (cardSelected: CategoryRestaurant) => () => {
        setCategorySelected(cardSelected)
        setPlates("", cardSelected.CategoryID)
        setQuery("")
  };

  return (
    <div onClick={handleClickCategory(category)} className={`${styles.buttonGral} ${category.CategoryID === categorySelected.CategoryID ? styles.selected : styles.notSelected} `}>
      <p>
        {category.name}
      </p>
    </div>
  );

};
