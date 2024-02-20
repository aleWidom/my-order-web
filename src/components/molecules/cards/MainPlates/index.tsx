
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MainPlate } from '@/components/molecules';
import { PlateRestaurant } from '@/interfaces';
import styles from './MainPlates.module.scss'


interface MainPlatesProps {
	plates: PlateRestaurant[]
}

export const MainPlates = ({ plates }: MainPlatesProps) => {

	const ranking = plates?.filter((item: PlateRestaurant) => {
		if (item.ItemID === '2' || item.ItemID === '61' || item.ItemID === '83') {
			return item
		}
	})

	const cardsDay = plates?.filter((item: PlateRestaurant) => {
		if (item.ItemID === '37' || item.ItemID === '85' || item.ItemID === '81' || item.ItemID === '111') {
			return item
		}
	})

	const specials = plates?.filter((item: PlateRestaurant) => {
		if (item.ItemID === '47' || item.ItemID === '72' || item.ItemID === '89') {
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
					<Swiper spaceBetween={20} slidesPerView={1.2}>
						<>
							{cardAllMainPlates.plates &&
								cardAllMainPlates.plates.map((e: any) => (
									<SwiperSlide key={e.ItemID} >
										<MainPlate source={e.photo} title={e.title} price={e.price} description={e.description} idItem={e.ItemID} />
									</SwiperSlide>
								))}
						</>
					</Swiper>
				</div>
			))}
		</>
	)
};


