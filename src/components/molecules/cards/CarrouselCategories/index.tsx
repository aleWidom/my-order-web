'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CategoryRestaurant } from '@/interfaces';
import { Category } from '@/components/atoms';
import styles from './CarrouselCategories.module.scss'
import "@/styles/SwiperComponents.scss";

interface SwiperProps {
	categories: CategoryRestaurant[];
}

export const CarrouselCategories = ({ categories }: SwiperProps) => {
	return (
		<Swiper
			className={styles.swipper}
			modules={[Autoplay, Navigation, Pagination]}
			breakpoints={{
				// when window width is >= 320px
				320: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				576: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
				1400: {
					slidesPerView: 8,
					spaceBetween: 15,
				},
				1920: {
					slidesPerView: 14,
					spaceBetween: 10,
				}
			}}
			navigation
			loop={true}
		>
			{categories?.map((category) => (
				<SwiperSlide key={category.CategoryID}>
					<Category category={category} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

