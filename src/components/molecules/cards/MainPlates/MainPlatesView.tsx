import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { MainPlate } from '../MainPlate'; /* '/@/components/molecules' */
import { CardsCategoryMainPlates} from '@/interfaces';
import styles from './MainPlates.module.scss';


interface Props {
    categoryMainPlates: /* CardsCategoryMainPlates  */ any
}


export const MainPlatesView = ({categoryMainPlates}: Props) => {
	return (
		<>
			<div className={styles.cardsPlates}>
				<h3 className={styles.title}>{categoryMainPlates.header}</h3>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					{categoryMainPlates.plates.length &&
						categoryMainPlates.plates.map((e:any) => (
							<SwiperSlide key={e.ItemID}>
                                <MainPlate key={e.ItemID} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.ItemID} /> 
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</>
	);
};
