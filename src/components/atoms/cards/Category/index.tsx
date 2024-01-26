'use client'
import { useRouter } from "next/navigation";
import { CategoryRestaurant } from "@/interfaces";
import styles from "./Category.module.scss";


interface CategoryProps {
  category: CategoryRestaurant,
  tableID: string | undefined,
  categoryID: string
}


export const Category = ({ category, tableID, categoryID }: CategoryProps) => {

  const router = useRouter()

  const handleClickCategory = (cardSelected: CategoryRestaurant) => () => {
    // Redireccionamos al index con una query
    router.push(`?table=${tableID}&query=${""}&category=${cardSelected.CategoryID}`);
  };

  return (
    <div onClick={handleClickCategory(category)} className={`${styles.buttonGral} ${category.CategoryID === categoryID ? styles.selected : styles.notSelected}`}>
      <p>
        {category.name}
      </p>
    </div>
  );

};

/*   */