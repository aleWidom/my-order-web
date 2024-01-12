import { useContext } from "react";
import { SearchContext } from "@/context";
import { MenuPlate } from "@/components/molecules";
import styles from './MenuPlates.module.scss'




export const MenuPlates= () => {

    const { results, categorySelected } = useContext(SearchContext);

    return (
        <div className={styles.container}>
            <div className={styles.containerImgCategory} style={{ backgroundImage: `url(${categorySelected.photo})` }}>
                <h2 className={styles.title}>{categorySelected.CategoryID !== "0" ? categorySelected.name : "Results"}</h2>
            </div>
            {results.map((e) => (
                <MenuPlate key={e.ItemID} header={e.title} description={e.description} price={e.price} id={e.ItemID} />
            ))}
        </div>
    );
}; 



