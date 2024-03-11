import { Suspense } from 'react';
import { SearchCalls } from '@/components/atoms';
import { Categories, FormSearch, OrdersPlates, Plates, Modals } from '@/components/molecules';
import styles from './MainHome.module.scss'
import { TableRestaurant } from '@/interfaces';


interface NavbarProps {
	table: TableRestaurant
}

export const MainHome = ({ table }: NavbarProps) => {
	return (
		<>
			<div className={styles.mainContainerPlates}>
				<Suspense fallback={"Cargando..."}>
					<SearchCalls tableID={table.TableID} />
				</Suspense>
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


