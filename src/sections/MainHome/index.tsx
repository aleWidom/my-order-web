"use client"
import { CallWaiter, Categories, FormSearch, MainPlates, MenuPlates, ModalPlateRequired, OrdersPlates, ModalInfo } from '@/components/molecules';
import { useItemsStore, useOrdersStore, useSearchStore } from '@/store';
import styles from './MainHome.module.scss'




export const MainHome = () => {

	const plates = useItemsStore(state => state.plates)

	const section = useItemsStore(state => state.section)

	const request = useOrdersStore(state => state.request)

	const modalInfo = useSearchStore(state=> state.modalInfo)

	return (
		<>
			<div className={styles.mainContainerPlates}>
				<CallWaiter />
				<FormSearch />
				<Categories />
				{section === "main" ? <MainPlates plates={plates} /> : <MenuPlates plates={plates} />}
			</div>

			<OrdersPlates />
			{request && <ModalPlateRequired request={request} />}
			{modalInfo.state === true && <ModalInfo modalInfo={modalInfo} />}
		</>
	)
}


