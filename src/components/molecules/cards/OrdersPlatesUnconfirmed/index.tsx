"use client"
import { useContext, useState } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { TableContext } from '@/context';
import { v4 as uuidv4 } from 'uuid';
import { OrdersPlatesUnConfirmedView } from './OrdersPlatesUnConfirmedView';
import { itemPeopleInTable } from '@/services';


export const OrdersPlatesUnConfirmed = () => {

	const { cartTemporary, modalPlate, setModalPlate, setCartDefinitive, setCartTemporary, cartDefinitive} = useContext(OrderContext);

	const { idPeopleInTable, table } = useContext(TableContext)

	const [loadingButton, setLoadingButton] = useState(false)

	const handleConfirmRequest = () => {

		const idOrder = uuidv4().replaceAll('/', 'a')

		setLoadingButton(true)

		itemPeopleInTable({
			numberTable: table.table_number,
			orderNumber: idOrder,
			idPeopleInTable: idPeopleInTable,
			detail: cartTemporary
		})
		.then((response)=> {
			if(response?.status === 200) {
				setCartDefinitive([
					...cartTemporary, ...cartDefinitive
				])
		
				setCartTemporary([])
		
				setModalPlate({
					...modalPlate,
					stateModal: true,
					modalEditOrDeleteOrConfirm: 'orderConfirmed',
					modalType: 'required',
				});
			} else {
				setModalPlate({
					...modalPlate,
					stateModal: true,
					modalEditOrDeleteOrConfirm: 'orderError',
					modalType: 'required',
				});
			}
		}).catch((err)=> {
			console.log(err)
		})

		
	}

	return (
		<OrdersPlatesUnConfirmedView handleConfirmRequest={handleConfirmRequest} cartTemporary={cartTemporary} loadingButton={loadingButton}/>
	);
};

