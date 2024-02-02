
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MainPlate } from '@/components/molecules';
import { PlateRestaurant } from '@/interfaces';


interface MainPlatesViewProps {
	plates: PlateRestaurant[], 
}

export const MainPlatesView = ({ plates}: MainPlatesViewProps) => {

	return (
		<Swiper spaceBetween={20} slidesPerView={1.2}>
			{plates.length &&
				plates.map((e: any) => (
					<SwiperSlide key={e.ItemID} >
						<MainPlate source={e.photo} title={e.title} price={e.price} description={e.description} idItem={e.ItemID}  />
					</SwiperSlide>
				))}
		</Swiper>
	);
};


