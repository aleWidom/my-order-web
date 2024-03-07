
"use client"
import { useEffect } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { OrderPlate } from '@/components/molecules'
import { useOrdersStore } from '@/store/orders-store'
import styles from './OrdersPlates.module.scss'
import { fetchItemPeopleInTable, peopleInTableFetch } from '@/services';
import { Order } from '@/interfaces';


interface OrdersPlatesProps {
	tableID: string
}


export const OrdersPlates = ({ tableID }: OrdersPlatesProps) => {

	const orders = useOrdersStore(state => state.orders)

	const setOrders = useOrdersStore(state => state.setOrders)

	const request = useOrdersStore(state => state.request)

	useEffect(() => {
		peopleInTableFetch(tableID)
			.then((data) => {
				if (data !== undefined) {

					fetchItemPeopleInTable(data[0].PeopleInTableID)
						.then((data: Order[]) => {
							console.log(data)
							setOrders(data);
						})
						.catch((err) => {
							console.log(err);
							return err;
						})
				}
			})
			.catch((err) => {
				console.log(err);
				return err;
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [request === true]);

	return (
		<div className={styles.mainContainerOrders}>
			<div className={styles.containerRequest}>
				<h3 className={styles.title} >Órdenes solicitadas.</h3>
				{orders.length ? <h3 className={styles.quantityOrder}>{orders.length}</h3> : ""}
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



