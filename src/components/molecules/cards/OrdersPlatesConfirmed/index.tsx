"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
import { OrdersPlatesConfirmedView } from './OrdersPlatesConfirmedView';





export const OrdersPlatesConfirmed = () => {

	const { cartDefinitive} = useContext(OrderContext);

	return (
		<OrdersPlatesConfirmedView cartDefinitive={cartDefinitive} />
	);
};

