
import { CarrouselCategories } from '../CarrouselCategories';
import { getAllCategoriesIdRestaurant1 } from '@/services';
import styles from './Categories.module.scss';

export const Categories = async () => {

	const categories = await getAllCategoriesIdRestaurant1()

	return (
		<div className={styles.containerCategories} id="swiper-container">
			<CarrouselCategories categories={categories} spaceBetween={50} slidesPerView={3} />
		</div>
	);
};



