"use client"
import { useContext } from "react";
import { OrderContext } from "../../../../context";
import styles from "./MenuPlate.module.scss";


interface Props {
  id: string;
  price: string;
  description: string;
  header: string;
}

export const MenuPlate = ({ price, description, header, id }: Props) => {

  const { setModalPlate } = useContext(OrderContext);

  const handleClickRequest = () => {
    setModalPlate({
      ItemID: id,
      stateModal: true,
      title: header,
      price: price,
      description: description,
      modalType: 'main',
      quantity: 1
    });
  };

  return (
    <div className={styles.containerCardMenu} onClick={handleClickRequest}>
      <div className={styles.containerDescription}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.description}>
          {description.length > 40 ? description.slice(0, 40) + "..." : description}
        </p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );

};







