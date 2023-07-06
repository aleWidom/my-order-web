import styles from "./MenuPlate.module.scss";

interface Props {
  price: string;
  description: string;
  header: string;
  handleClickRequest: () => void
}

export const MenuPlateView = ({price, description, header, handleClickRequest }: Props) => {
  return (
    <div className={styles.containerCardMenu} onClick={handleClickRequest}>
      <div className={styles.containerDescription}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.description}>
          {description}
        </p>
        <p className={styles.price}>${price}</p>
      </div>
      {/* <div className={styles.containerImg}>
        <img src={source} className={styles.imgCardDishFood} alt={""} />
      </div> */}
    </div>
  );
};
