import { CategoriesView } from './CategoriesView';
import { fetchItemsRestaurant, getAllCategoriesIdRestaurant1 } from '@/services';
import { CategoryRestaurant, PlateRestaurant } from '@/interfaces';
import styles from './Categories.module.scss';


interface CategoriesProps {
	tableID: string | undefined,
	categoryID: string
}


export const Categories = async ({tableID, categoryID}: CategoriesProps) => {

	const categoriesMenuRestaurant: CategoryRestaurant[] = await getAllCategoriesIdRestaurant1()

	
	return (
		<div className={styles.containerCategories}>
			<CategoriesView categoriesMenuRestaurant={categoriesMenuRestaurant} tableID={tableID} categoryID={categoryID}/>
		</div>
	);
};


