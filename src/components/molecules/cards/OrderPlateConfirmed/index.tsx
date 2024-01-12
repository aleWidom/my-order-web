import { PlateSelected } from "@/interfaces"
import { OrderPlateConfirmedView } from "./OrderPlateConfirmedView"


const process = {
  color: "hsl(135, 70%, 51%)"
}

interface Props {
  cartProduct: PlateSelected
}

export const OrderPlateConfirmed = ({cartProduct}: Props) => {
  return (
    <OrderPlateConfirmedView cartProduct={cartProduct} 
    state={{title: "Su pedido se ha solicitado correctamente.", style: process} } />
  )
}


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
