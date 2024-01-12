/* import { Swiper } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css'; */
import { MainPlate } from '@/components/molecules';
import { fetchItemsRestaurant } from '@/services';
import { PlateRestaurant } from '@/interfaces';
import styles from './MainPlates.module.scss';


export const MainPlates = async () => {
	
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
			{cardsAllMainPlates.map((categoryMainPlates, i) => (
				<div className={styles.cardsPlates} key={i}>
					<h3 className={styles.title}>{categoryMainPlates.header}</h3>
					{/* <Swiper slidesPerView={1.2} spaceBetween={20}> */}
						{categoryMainPlates.plates.length &&
							categoryMainPlates.plates.map((e: any) => (
							/* 	<SwiperSlide key={e.ItemID}> */
									<MainPlate key={e.ItemID} source={e.photo} header={e.title.length > 35 ? e.title.slice(0, 35) + '...' :  e.title} price={e.price} description={e.description} id={e.ItemID} />
						/* 		</SwiperSlide> */
							))}
					{/* </Swiper> */}
				</div>
			))}
		</>
	);
};


