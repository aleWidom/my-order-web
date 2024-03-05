"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { CategoryRestaurant } from "@/interfaces"
import { Category } from "@/components/atoms"



interface SwiperProps {
    categories: CategoryRestaurant[],
}

export const CarrouselCategories = ({ categories }: SwiperProps) => {
    return (
        <Swiper spaceBetween={50} slidesPerView={3}>
            {categories.map((category) => (
                <SwiperSlide key={category.CategoryID}>
                    <Category category={category} />
                </SwiperSlide>
            ))}
        </Swiper>

    )
}