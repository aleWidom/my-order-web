"use client"
import Image from "next/image";
import { MenuPlate } from "@/components/molecules";
import { PlateRestaurant } from "@/interfaces";
import { useCategoriesStore } from "@/store";
import styles from './MenuPlates.module.scss'


interface MenuPlatesProps {
    plates: PlateRestaurant[]
}

export const MenuPlates = ({ plates }: MenuPlatesProps) => {

    const categorySelected = useCategoriesStore(state => state.categorySelected)

    return (
        <div className={styles.container}>
            <Image className={styles.containerImgCategory} width={100} height={100} alt={"headerResult"} src={`${categorySelected.CategoryID === "0" ? "https://www.history.org.uk/library/1308/0000/0172/Exam_Results_image_chalk_board_640.jpg" : categorySelected?.photo}`} />
            <h2 className={styles.title}>{categorySelected.CategoryID === "0" ? "" : categorySelected?.name}</h2>
            {plates.map((e) => (
                <MenuPlate key={e.ItemID} title={e.title} description={e.description} price={e.price} idItem={e.ItemID} />
            ))}
        </div>
    );
};





