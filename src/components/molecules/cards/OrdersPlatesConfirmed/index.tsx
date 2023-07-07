"use client"
import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { OrdersPlatesConfirmedView } from './OrdersPlatesConfirmedView';



export const OrdersPlatesConfirmed = () => {

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
		<OrdersPlatesConfirmedView cartDefinitive={cartDefinitive}/>
	);
};

