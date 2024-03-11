import { Suspense } from 'react';
import { Categories, FormSearch, OrdersPlates, Modals, CallWaiter } from '@/components/molecules';
import { TableRestaurant } from '@/interfaces';
import styles from './MainHome.module.scss'
import { SearchPlates } from '@/components/atoms';



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
				<Suspense fallback={"Cargando..."}>
					<SearchPlates />
				</Suspense>

			</div>
			<OrdersPlates tableID={table.TableID} />
			<Modals />
		</>
	)
}


