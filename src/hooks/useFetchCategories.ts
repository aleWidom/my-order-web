"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../context';
import { getAllCategoriesIdRestaurant1 } from '../services/items';

export const useFetchCategories = () => {
	const { setCategoriesMenuRestaurant } = useContext(OrderContext);

	useEffect(() => {
		getAllCategoriesIdRestaurant1()
			.then((data) => {
				if(data !== undefined) {
					setCategoriesMenuRestaurant(data);
				}
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
