"use client"
import { useEffect, useContext } from 'react';
import { OrderContext } from '../context';


export const useFetchCardsSpecialsCheff = () => {
	const { itemsRestaurant, setCardsSpecialsCheff} = useContext(OrderContext);
	
	useEffect(() => {
		const specials = itemsRestaurant?.filter((item) => {
			if(item.ItemID === '47' || item.ItemID === '72' || item.ItemID === '89') {
			   return item
		   } 
		 })
		 setCardsSpecialsCheff(specials)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemsRestaurant]);
};
