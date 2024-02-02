
import { useOrdersStore } from '@/store/orders-store'
import styles from './Orders.module.scss'

export const Orders = () => {

	const orders = useOrdersStore(state => state.orders)

  return (
	<>
	<h3 className={styles.title}>Solicitudes</h3>
				{orders.length === 0 ? <p>No se han realizado órdenes en este mesa.</p> : "Ordenes"}
				</>
  )
}

