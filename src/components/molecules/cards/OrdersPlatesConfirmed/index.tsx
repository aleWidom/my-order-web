"use client"
import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { OrderPlateConfirmedView } from './OrderPlateConfirmedView';



export const OrderPlateConfirmed = () => {

	const { cartDefinitive} = useContext(OrderContext);

	/* 	setInterval(() => { 
			if(cartDefinitive.length) {
				fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
				   .then((data) => {
					   setCartDefinitive(data);
					   localStorage.setItem('cartDefinitive', JSON.stringify(data))
				   })
				   .catch((err) => {
					   console.log(err);
				   });
			}
	   }, 10000);  */

	return (
		<OrderPlateConfirmedView cartDefinitive={cartDefinitive}/>
	);
};

/* {cartProduct.state === 'delivered' ? (
	<small className={styles.delivered}>Entregado</small>
) : (
	<small className={styles.process}>Su pedido se está preparando.</small>
)} */