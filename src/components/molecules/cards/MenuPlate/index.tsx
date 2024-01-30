import { Quantity } from "@/components/molecules";
import styles from "./MenuPlate.module.scss";


interface Props {
  price: string;
  description: string;
  header: string;
  tableNumber: string | undefined
}

export const MenuPlate = ({ price, description, header, tableNumber }: Props) => {
  return (
   <>
    <div className={styles.containerCardMenu}>
      <div className={styles.containerDescription}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.description}>
          {description}
        </p>
        <p className={styles.price}>${price}</p>
      </div>
      <Quantity tableNumber={tableNumber}/>
    </div>

   </>
  );

};







