
import { Swiper } from '@/components/molecules';
import { getAllCategoriesIdRestaurant1 } from '@/services';
import styles from './Categories.module.scss';


export const Categories = async () => {

	const categories = await getAllCategoriesIdRestaurant1()

	return (
		<div className={styles.containerCategories} /*id="swiper-container*/>
			<Swiper data={categories} spaceBetween={50} slidesPerView={3} />
		</div>
	);
};



