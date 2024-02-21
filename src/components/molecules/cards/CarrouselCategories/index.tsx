"use client"
import Swiper from "swiper"
import { SwiperSlide } from "swiper/react"
import { CategoryRestaurant } from "@/interfaces"
import { Category } from "@/components/atoms"



interface CarrouselCategoriesProps {
    categories: CategoryRestaurant[],
    spaceBetween: number,
    slidesPerView: number
}

export const CarrouselCategories = ({ categories, spaceBetween, slidesPerView }: CarrouselCategoriesProps) => {

    return (
        <>
            {
                categories?.map((category: CategoryRestaurant) => (
                    <SwiperSlide key={category.CategoryID} style={{ width: `calc(100% / ${slidesPerView})`, marginRight: `${spaceBetween}px` }}>
                        <Category category={category} />
                    </SwiperSlide>
                ))
            }
        </>

    )
}
