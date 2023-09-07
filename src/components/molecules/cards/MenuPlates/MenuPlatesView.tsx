import { MenuPlate } from '../MenuPlate';
import { CategoryRestaurant, PlateRestaurant } from '@/interfaces';
import styles from './MenuPlates.module.scss'

interface Props {
    results: PlateRestaurant[],
    categorySelected: CategoryRestaurant,
    children: React.ReactNode
}


export const MenuPlatesView = ({ results, categorySelected, children }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerImgCategory} style={{ backgroundImage: `url(${categorySelected.photo})` }}>
                <h2 className={styles.title}>{children}</h2>
            </div>
            {results.map((e) => (
                <MenuPlate key={e.ItemID} header={e.title} description={e.description} price={e.price} id={e.ItemID} />
            ))}
        </div>
    );
}; 
