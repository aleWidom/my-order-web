
/* import { SearchContext } from '@/context'; */
import { CallWaiter, Categories, FormSearch, MainPlates, MenuPlates } from '@/components/molecules';
import { fetchTable, updateTableNumberCall, updateTableNumberNotCall } from '@/services';
import styles from './MainHome.module.scss'
import { TableRestaurant } from '@/interfaces';



interface MainHomeProps {
	table: TableRestaurant | undefined
}


export const MainHome = async ({ table }: MainHomeProps) => {

	/* const { results } = useContext(SearchContext); */

	/* const { setModalInfo } = useContext(SearchContext); */

	

	console.log(table)


	return (
		<div className={styles.mainContainerHome}>
			<CallWaiter table={table} message='Llamar al moza/o a la mesa.' color='red' />
			<FormSearch />
			{/* <Categories /> */}
			{/* {results.length === 0 ? <MainPlates /> : <MenuPlates />} */}
		</div>
	)
}

