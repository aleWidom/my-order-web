

import { CarrouselCategories } from '@/components/molecules';
import { getAllCategoriesIdRestaurant1 } from '@/services';
import styles from './Categories.module.scss';


export const Categories = async () => {

	const categories = await getAllCategoriesIdRestaurant1()

	return (
		<div className={styles.containerCategories}>
			<CarrouselCategories categories={categories} />
		</div>
	);
};



