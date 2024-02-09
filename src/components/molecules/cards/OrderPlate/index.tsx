import { Order} from '@/interfaces'
import styles from './OrderPlate.module.scss'


interface OrderProps {
	order: Order,
}

export const OrderPlate = ({ order}: OrderProps) => {

	const handleDeleteOrder = () => {
		console.log(order.orderNumberID)
		/* deleteOrder(order.orderNumberID) */
	}

	return (
	  <div className={styles.containerCardOrderDefinitive}>
		<div className={styles.containerDescription}>
		  <h4 className={styles.title}>{order.title}</h4>
		  <small className={styles.price} >Precio Unitario: ${order?.price}</small>
		  <small className={styles.quantity}>Cantidad: {order.quantity} u.</small>
		  <button className={styles.button} onClick={handleDeleteOrder}>Cancelar</button>
	{/* 	  <small style={state.style}>{state.title}</small> */}
		</div>
	  </div>
	)
  }