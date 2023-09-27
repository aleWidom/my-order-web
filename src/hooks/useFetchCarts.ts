"use client"
import { useContext, useEffect } from 'react';
import { OrderContext, TableContext } from '../context';
import { fetchItemPeopleInTable } from '@/services';


export const useFetchCarts = () => {
	const { setCartDefinitive } = useContext(OrderContext);

	const { idPeopleInTable } = useContext(TableContext);

	console.log(idPeopleInTable)

	useEffect(() => {
		if (idPeopleInTable !== "") {
			fetchItemPeopleInTable(idPeopleInTable)
				.then((data) => {
					setCartDefinitive(data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idPeopleInTable]);
};
