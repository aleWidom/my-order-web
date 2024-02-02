"use client"
import { CallWaiter, Categories, FormSearch, MainPlates, MenuPlates, Orders } from '@/components/molecules';
import { useItemsStore } from '@/store';
import styles from './MainHome.module.scss'



export const MainHome = () => {

	const plates = useItemsStore(state => state.plates)
	
	return (
		<>
			<div className={styles.mainContainerPlates}>
				<CallWaiter />
				<FormSearch />
				<Categories />
				{plates?.length === 0 ? <MainPlates /> :  <MenuPlates plates={plates} />}
			</div>
			<div className={styles.mainContainerOrders}>
				<Orders/>
			</div>
		</>
	)
}


