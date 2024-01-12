/* import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; */
import { Category} from '@/components/atoms';
import { getAllCategoriesIdRestaurant1 } from '@/services';
import { CategoryRestaurant } from '@/interfaces';
import styles from './Categories.module.scss';




export const Categories = async () => {

	const  categoriesMenuRestaurant = await getAllCategoriesIdRestaurant1()

	return (
			<div className={styles.containerCategories}>
				{/* <Swiper spaceBetween={50} slidesPerView={3}> */}
					{categoriesMenuRestaurant?.map((category:CategoryRestaurant) => (
					/* 		<SwiperSlide key={category.CategoryID}> */
                                <Category key={category.CategoryID} category={category}/>
						/* 	</SwiperSlide> */
						))} 
			{/* 	</Swiper> */}
			</div>
	);
};


