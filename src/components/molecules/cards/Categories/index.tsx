import { useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Category } from '@/components/atoms';
import { CategoryRestaurant } from '@/interfaces';
import { useCategoriesStore } from '@/store';
import styles from './Categories.module.scss';


export const Categories = () => {

	const categories = useCategoriesStore(state => state.categories)

	const setCategories = useCategoriesStore(state => state.setCategories)

	useLayoutEffect(() => {
		setCategories()
	}, [setCategories])


	return (
		<div className={styles.containerCategories}>
			<Swiper spaceBetween={50} slidesPerView={3}>
				{
					categories?.map((category: CategoryRestaurant) => (
						<SwiperSlide key={category.CategoryID}>
							<Category category={category}/>
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	);
};



