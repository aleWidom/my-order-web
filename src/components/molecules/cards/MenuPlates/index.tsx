
import Image from "next/image";
import { MenuPlate } from "@/components/molecules";
import { getAllCategoriesIdRestaurant1 } from "@/services";
import { CategoryRestaurant, PlateRestaurant } from "@/interfaces";
import styles from './MenuPlates.module.scss'

interface MenuPlatesProps {
    results: PlateRestaurant[],
    categoryID: string
}


export const MenuPlates= async ({results, categoryID}: MenuPlatesProps) => {

    const categoriesMenuRestaurant: CategoryRestaurant[] = await getAllCategoriesIdRestaurant1()

    const categorySelected: CategoryRestaurant | undefined = categoriesMenuRestaurant.find((category)=> {
        return category.CategoryID === categoryID
    })


 return (
        <div className={styles.container}>
             <Image className={styles.containerImgCategory} width={100} height={100} alt={"headerResult"} src={`${categoryID === "0" ? "https://cache.careers360.mobi/media/presets/860X430/article_images/2020/10/3/10th-results.webp" : categorySelected?.photo}`}/>
                <h2 className={styles.title}>{categoryID === "0" ? "" :categorySelected?.name}</h2>
            {results.map((e) => (
                <MenuPlate key={e.ItemID} header={e.title} description={e.description} price={e.price}/>
            ))} 
        </div>
    );
}; 





