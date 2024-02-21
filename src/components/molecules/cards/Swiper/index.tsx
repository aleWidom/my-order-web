"use client"
import { SwiperSlide } from "swiper/react"
import { CategoryRestaurant } from "@/interfaces"
import { Category } from "@/components/atoms"



interface SwiperProps {
    data: [],
    spaceBetween: number,
    slidesPerView: number
}

export const Swiper = ({ data, spaceBetween, slidesPerView }: SwiperProps) => {
    return (
        <>
            {
                data?.map((category: CategoryRestaurant) => (
                    <SwiperSlide key={category.CategoryID} style={{ width: `calc(100% / ${slidesPerView})`, marginRight: `${spaceBetween}px` }}>
                        <Category category={category} />
                    </SwiperSlide>
                ))
            }
        </>

    )
}
