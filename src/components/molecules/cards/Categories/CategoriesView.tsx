'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Category } from '@/components/atoms';
import { CategoryRestaurant} from '@/interfaces';


interface CategoriesView {
    categoriesMenuRestaurant: CategoryRestaurant[],
	tableID: string | undefined,
	categoryID: string
}

export const CategoriesView = ({categoriesMenuRestaurant, tableID, categoryID}:CategoriesView) => {
	return (
			<Swiper spaceBetween={50} slidesPerView={3}>
				{
					categoriesMenuRestaurant?.map((category: CategoryRestaurant) => (
						<SwiperSlide key={category.CategoryID}>
							<Category category={category} tableID={tableID} categoryID={categoryID}/>
						</SwiperSlide>
					))
				}
			</Swiper>
	);
};


