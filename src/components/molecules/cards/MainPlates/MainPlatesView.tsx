
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MainPlate } from '@/components/molecules';
import { PlateRestaurant } from '@/interfaces';


interface MainPlatesViewProps {
	plates: PlateRestaurant[], 
	tableNumber: string | undefined
}

export const MainPlatesView = ({ plates, tableNumber }: MainPlatesViewProps) => {
	return (
		<Swiper spaceBetween={20} slidesPerView={1.2}>
			{plates.length &&
				plates.map((e: any) => (
					<SwiperSlide key={e.ItemID} >
						<MainPlate source={e.photo} header={e.title} price={e.price} description={e.description} id={e.ItemID} tableNumber={tableNumber} />
					</SwiperSlide>
				))}
		</Swiper>
	);
};


