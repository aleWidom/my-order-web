'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CategoryRestaurant } from '@/interfaces';
import { Category } from '@/components/atoms';

interface SwiperProps {
	categories: CategoryRestaurant[];
}

export const CarrouselCategories = ({ categories }: SwiperProps) => {
	return (
		<Swiper
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
				},
			}}
			modules={[Navigation, Pagination, Autoplay]}
			autoplay
		>
			{categories.map((category) => (
				<SwiperSlide key={category.CategoryID}>
					<Category category={category} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

