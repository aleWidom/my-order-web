import { PlateSelected } from '@/interfaces'
import styles from './OrderPlateConfirmedView.module.scss'

interface Props {
  cartProduct: PlateSelected,
  state: any
}

export const OrderPlateConfirmedView = ({ cartProduct, state }: Props) => {
  return (
    <div className={styles.containerCardOrderDefinitive}>
      <div className={styles.containerDescription}>
        <h4 className={styles.title}>{cartProduct.title}</h4>
        <small className={styles.price} >Precio Unitario: ${cartProduct?.price}</small>
        <small className={styles.quantity}>Cantidad: {cartProduct.quantity} u.</small>
        <small style={state.style}>{state.title}</small>
      </div>
    </div>
  )
}
