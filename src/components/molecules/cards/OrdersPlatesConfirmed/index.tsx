"use client"
import { useContext } from 'react';
import { TableContext, OrderContext } from '@/context';
import { OrdersPlatesConfirmedView } from './OrdersPlatesConfirmedView';
import { fetchItemPeopleInTable } from '@/services';




export const OrdersPlatesConfirmed = () => {

	const { cartDefinitive, setCartDefinitive} = useContext(OrderContext);

	const {idPeopleInTable} = useContext(TableContext);

	console.log(idPeopleInTable)

	 	setInterval(() => { 
			/* if(cartDefinitive.length) { */
				fetchItemPeopleInTable(idPeopleInTable)
				   .then((data) => {
					console.log("hola")
					console.log(data)
					   setCartDefinitive(data);
					/*    localStorage.setItem('cartDefinitive', JSON.stringify(data)) */
				   })
				   .catch((err) => {
					   console.log(err);
				   });
			/* } */
	   }, 10000);  

	return (
		<OrdersPlatesConfirmedView cartDefinitive={cartDefinitive}/>
	);
};

