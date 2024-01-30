
import { MainPlatesView } from './MainPlatesView';
import { fetchItemsRestaurant } from '@/services';
import { PlateRestaurant } from '@/interfaces';
import styles from './MainPlates.module.scss';

interface MainPlatesProps {
	tableNumber: string | undefined
}

export const MainPlates = async ({tableNumber}:MainPlatesProps) => {
	
	const allItems = await fetchItemsRestaurant()

	const ranking = allItems?.filter((item: PlateRestaurant) => {
		if(item.ItemID === '2' || item.ItemID === '61' || item.ItemID === '83') {
		   return item
	   } 
	 })

	const cardsDay = allItems?.filter((item: PlateRestaurant) => {
		if(item.ItemID === '37' || item.ItemID === '85' || item.ItemID === '81' || item.ItemID === '111') {
		   return item
	   } 
	 })

	 const specials = allItems?.filter((item: PlateRestaurant) => {
		if(item.ItemID === '47' || item.ItemID === '72' || item.ItemID === '89') {
		   return item
	   } 
	 })

	const cardsAllMainPlates = [
		{
			header: "Platos más solicitados",
			plates: ranking 
		},
		 {
			header: "Platos del día",
			plates: cardsDay
		},
		{
			header: "Sugerencias del cheff",
			plates: specials
		} 
	]

	return (
		<>
			{cardsAllMainPlates.map((cardAllMainPlates, i) => (
				<div className={styles.cardsPlates} key={i}>
					<h3 className={styles.title}>{cardAllMainPlates.header}</h3>
					<MainPlatesView plates={cardAllMainPlates.plates} tableNumber={tableNumber}/>
				</div>
			))}
		</>
	);
};


