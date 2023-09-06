"use client"
import { useContext } from 'react';
import { TableContext, OrderContext } from '@/context';
import { OrdersPlatesConfirmedView } from './OrdersPlatesConfirmedView';
import { fetchItemPeopleInTable } from '@/services';




export const OrdersPlatesConfirmed = () => {

	const { cartDefinitive} = useContext(OrderContext);

	return (
		<OrdersPlatesConfirmedView cartDefinitive={cartDefinitive} />
	);
};

