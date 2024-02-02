import { Quantity } from "@/components/molecules";
import styles from "./MenuPlate.module.scss";


interface Props {
  price: string;
  description: string;
  title: string;
  idItem: string
}

export const MenuPlate = ({ price, description, title,  idItem }: Props) => {
  return (
   <>
    <div className={styles.containerCardMenu}>
      <div className={styles.containerDescription}>
        <h4 className={styles.header}>{title}</h4>
        <p className={styles.description}>
          {description}
        </p>
        <p className={styles.price}>${price}</p>
      </div>
      <Quantity title={title} price={price} idItem={idItem}/>
    </div>

   </>
  );

};







