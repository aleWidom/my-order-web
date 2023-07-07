import { PlateSelected } from '@/interfaces'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styles from './OrderPlateUnConfirmed.module.scss'

interface Props {
  cartProduct: PlateSelected;
  handleEdit: any;
  handleDelete: any
}

export const OrderPlateUnConfirmedView = ({ cartProduct, handleEdit, handleDelete }: Props) => {
  return (
    <>
      <div className={styles.containerCardOrder}>
        <div className={styles.containerDescription}>
          <h4 className={styles.title}>{cartProduct?.title}</h4>
          <small className={styles.price} >Precio Unitario: ${cartProduct?.price}</small>
          <small className={styles.quantity} >Cantidad: {cartProduct?.quantity} u.</small>
        </div>
        <div className={styles.editDelete}>
          <FaEdit onClick={handleEdit(cartProduct, cartProduct.ItemID)} className={styles.edit} />
          <FaTrashAlt onClick={handleDelete(cartProduct, cartProduct.ItemID)} className={styles.delete} />
        </div>
      </div>
    </>
  )
}
