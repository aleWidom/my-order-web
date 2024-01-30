
import { CallWaiter, Categories, FormSearch, MainPlates, MenuPlates } from '@/components/molecules';
import { PlateRestaurant, TableRestaurant } from '@/interfaces';
import { getItemsResults } from '@/services';
import styles from './MainHome.module.scss'

interface MainHomeProps {
	table: TableRestaurant | undefined,
	query: string,
	categoryID: string
}


export const MainHome = async ({ table, query, categoryID }: MainHomeProps) => {

	const results: PlateRestaurant[] = await getItemsResults(query, categoryID)

	return (
		<>
			<div className={styles.mainContainerPlates}>
				<CallWaiter tableID={table?.TableID} />
				<FormSearch tableID={table?.TableID} />
				<Categories tableID={table?.TableID} categoryID={categoryID} />
				{results?.length === 0 ? <MainPlates tableNumber={table?.table_number} /> : <MenuPlates results={results} categoryID={categoryID} tableNumber={table?.table_number} />}
			</div>
			<div className={styles.mainContainerOrders}>
				<h3 className={styles.title}>Solicitudes</h3>
				<p>No se han realizado órdenes en este mesa.</p>
			</div>
		</>
	)
}


