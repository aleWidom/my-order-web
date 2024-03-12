
"use client"
import { Order } from '@/interfaces'
import { deleteOrder } from '@/services'
import { useOrdersStore } from '@/store'
import styles from './OrderPlate.module.scss'


interface OrderProps {
	order: Order,
}

export const OrderPlate = ({ order }: OrderProps) => {

	const setMessageRequest = useOrdersStore(state => state.setMessageRequest)

	const setRequest = useOrdersStore(state => state.setRequest)

	const handleDeleteOrder = () => {
		deleteOrder(order.orderNumberID)
		setRequest(true)
		setMessageRequest('cancel')
	}

	return (
		<div className={styles.containerCardOrderDefinitive}>
			<div className={styles.containerDescription}>
				<h4 className={styles.title}>{order.title.length > 38 ? order.title.slice(0, 38) + "..." : order.title}</h4>
				<small className={styles.price} >Precio Unitario: ${order?.price}</small>
				<small className={styles.quantity}>Cantidad: {order.quantity} u.</small>
				{order.state === "in process" ?
					<>
						<small className={styles.inProcess}>Su pedido se ha solicitado correctamente.</small>
						<button className={styles.button} onClick={handleDeleteOrder}>Cancelar</button></>
					: <small className={styles.loaded}>Su pedido se encuentra en preparación.</small>}
			</div>
		</div>
	)
}