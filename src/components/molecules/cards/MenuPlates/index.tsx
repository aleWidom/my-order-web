"use client"
import Image from "next/image";
import { MenuPlate } from "@/components/molecules";
import { PlateRestaurant } from "@/interfaces";
import { useCategoriesStore, useSearchStore } from "@/store";
import styles from './MenuPlates.module.scss'


interface MenuPlatesProps {
    plates: PlateRestaurant[]
}

export const MenuPlates = ({ plates }: MenuPlatesProps) => {

    const categorySelected = useCategoriesStore(state => state.categorySelected)

    const query = useSearchStore(state => state.query)


    return (
        <div className={styles.container}>
            {categorySelected.CategoryID === "0" ? <h2 className={styles.resultsSearch}>Resultados: {`"${query}"`}</h2> :
                <Image className={styles.containerImgCategory} width={100} height={100} alt={"headerResult"} src={`${categorySelected?.photo}`} />}
            <h2 className={styles.title}>{categorySelected.CategoryID === "0" ? "" : categorySelected?.name}</h2>
            <div className={styles.containerMenu}>
                {plates?.map((e) => (
                    <MenuPlate key={e.ItemID} title={e.title} description={e.description} price={e.price} idItem={e.ItemID} />
                ))}
            </div>
        </div>
    );
};





