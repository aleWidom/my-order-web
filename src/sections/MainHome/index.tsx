import { Suspense } from 'react';
import { SearchCalls } from '@/components/atoms';
import { Categories, FormSearch, OrdersPlates, Plates, Modals } from '@/components/molecules';
import styles from './MainHome.module.scss'


interface NavbarProps {
	tableID: string
}

export const MainHome = ({ tableID }: NavbarProps) => {
	return (
		<>
			<div className={styles.mainContainerPlates}>
				<Suspense fallback={"Cargando..."}>
					<SearchCalls tableID={tableID} />
				</Suspense>
				<FormSearch />
				<Suspense fallback={"Cargando..."}>
					<Categories />
				</Suspense>
				<Plates />
			</div>
			<OrdersPlates tableID={tableID} />
			<Modals />
		</>
	)
}


