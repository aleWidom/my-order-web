import {MouseEventHandler } from "react";
import styles from "./Category.module.scss";
import { CategoryRestaurant } from '../../../../interfaces/interfaces';

interface Props {
  category: CategoryRestaurant;
  handleClick: /* MouseEventHandler<HTMLDivElement> | undefined */ any;
  styleButton: any,
}

export const CategoryView = ({category, handleClick, styleButton}: Props) => {
  return (
    <div onClick={handleClick(category)} style={styleButton} className={styles.buttonGral}>
      <p /*  className={state === "selected" ? styles.linkSelected : styles.linkNotSelected} */>
        {category.name}
      </p>
    </div>
  );
};
