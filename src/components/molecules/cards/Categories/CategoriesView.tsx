
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Category} from '@/components/atoms';
import { CategoryRestaurant } from '../../../../interfaces';
import styles from './Categories.module.scss';


interface Props {
    categoriesMenuRestaurant: CategoryRestaurant[] 
}

export const CategoriesView = ({categoriesMenuRestaurant}: Props) => {
	return (
			<div className={styles.containerCategories}>
				<Swiper spaceBetween={50} slidesPerView={3}>
					{categoriesMenuRestaurant.map((category) => (
							<SwiperSlide key={category.CategoryID}>
                                <Category category={category}/>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
	);
};
