"use client"
import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext'; 
import { MainPlatesView } from "./MainPlatesView";

export const MainPlates = () => {
 
	const {cardsRankingPlates, cardsDayPlates, cardsSpecialsCheff} = useContext(OrderContext) 

	const cardsAllMainPlates = [
		{
			header: "Platos más solicitados",
			plates: cardsRankingPlates
		},
		{
			header: "Platos del día",
			plates: cardsDayPlates
		},
		{
			header: "Sugerencias del cheff",
			plates: cardsSpecialsCheff
		}
	]

	return (
		<>
		{cardsAllMainPlates.map((categoryMainPlates ,i) => (
			<MainPlatesView key={i} categoryMainPlates={categoryMainPlates}/>
		))} 
		</>
	);
};
