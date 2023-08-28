import { PlateSelected } from '@/interfaces'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styles from './OrderPlateUnConfirmed.module.scss'

interface Props {
  cartProduct: PlateSelected;
  key: number;
  handleEdit: any;
  handleDelete: any
}

export const OrderPlateUnConfirmedView = ({ cartProduct, handleEdit, handleDelete, key }: Props) => {
  console.log(key)
  return (
    <>
      <div className={styles.containerCardOrder}>
        <div className={styles.containerDescription}>
          <h4 className={styles.title}>{cartProduct?.title}</h4>
          <small className={styles.price} >Precio Unitario: ${cartProduct?.price}</small>
          <small className={styles.quantity} >Cantidad: {cartProduct?.quantity} u.</small>
        </div>
        <div className={styles.editDelete}>
          <FaEdit onClick={handleEdit(cartProduct, key)} className={styles.edit} />
          <FaTrashAlt onClick={handleDelete(cartProduct, key)} className={styles.delete} />
        </div>
      </div>
    </>
  )
}
