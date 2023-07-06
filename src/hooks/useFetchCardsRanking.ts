"use client"
import { useEffect, useContext } from 'react';
import { OrderContext } from '../context';


export const useFetchCardsRankingPlates = () => {
	const { itemsRestaurant, setCardsRankingPlates } = useContext(OrderContext);

	useEffect(() => {

	  const ranking = itemsRestaurant?.filter((item) => {
		 if(item.ItemID === '2' || item.ItemID === '61' || item.ItemID === '83') {
			return item
		} 
	  })
	  setCardsRankingPlates(ranking)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemsRestaurant]);
};
