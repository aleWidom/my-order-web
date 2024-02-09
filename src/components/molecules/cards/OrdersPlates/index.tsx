
import { useLayoutEffect } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { OrderPlate } from '@/components/molecules'
import { useOrdersStore } from '@/store/orders-store'
import styles from './OrdersPlates.module.scss'
import { useTableStore } from '@/store';
import { fetchItemPeopleInTable } from '@/services';
import { Order } from '@/interfaces';

export const OrdersPlates = () => {

	const orders = useOrdersStore(state => state.orders)

	const setOrders = useOrdersStore(state => state.setOrders)

	const request = useOrdersStore(state => state.request)

	const idPeopleInTable = useTableStore(state => state.idPeopleInTable)

	console.log(idPeopleInTable)

	useLayoutEffect(() => {
		fetchItemPeopleInTable(idPeopleInTable)
		.then((data: Order[])=> {
			setOrders(data)
		})
		.catch((err)=> {
			console.log(err)
			return err
		})
	}, [request === true, idPeopleInTable])

	return (
		<div className={styles.mainContainerOrders}>
			<div className={styles.containerRequest}>
				<h3 className={styles.title} >Órdenes solicitadas.</h3>
				{orders.length ? <h3 className={styles.quantityOrder}>{orders.length}</h3>: ""}
			</div>
		
			{orders.length === 0 ? <p>No se han realizado órdenes en este mesa.</p> :
				<div className={styles.container}>
					<>
						<TiArrowSortedDown className={styles.arrow} />
						{
							orders.map((order, i) => (
								<OrderPlate key={order.orderNumberID} order={order} />
							))
						}</>
				</div>

			}
		</div>
	)
}
