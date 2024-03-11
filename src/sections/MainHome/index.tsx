import { Suspense } from 'react';
import { Categories, FormSearch, OrdersPlates, Plates, Modals, CallWaiter } from '@/components/molecules';
import styles from './MainHome.module.scss'
import { TableRestaurant } from '@/interfaces';


interface NavbarProps {
	table: TableRestaurant
}

export const MainHome = ({ table }: NavbarProps) => {
	return (
		<>
			<div className={styles.mainContainerPlates}>
				<CallWaiter table={table} />
				<FormSearch />
				<Suspense fallback={"Cargando..."}>
					<Categories />
				</Suspense>
				<Plates />
			</div>
			<OrdersPlates tableID={table.TableID} />
			<Modals />
		</>
	)
}


