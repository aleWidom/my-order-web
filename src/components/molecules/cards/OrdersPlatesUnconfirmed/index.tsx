"use client"
import { useContext} from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { TableContext } from '@/context';
import { v4 as uuidv4 } from 'uuid';
import { OrdersPlatesUnConfirmedView } from './OrdersPlatesUnConfirmedView';
import { itemPeopleInTable } from '@/services';


export const OrdersPlatesUnConfirmed = () => {

	const {cartTemporary, modalPlate, setModalPlate, setCartDefinitive, setCartTemporary, cartDefinitive} = useContext(OrderContext);

	const {idPeopleInTable} = useContext(TableContext)
	
	const handleConfirmRequest = () => {

		cartTemporary.map((e) => (
			itemPeopleInTable(uuidv4().replaceAll('/', 'a'), idPeopleInTable, e.quantity, e.ItemID)
		))
	
		setCartDefinitive([
			...cartTemporary, ...cartDefinitive
		])
		
		setCartTemporary([])

		setModalPlate({
			...modalPlate,
			stateModal: true,
			modalEditOrDeleteOrConfirm: 'confirm',
			modalType: 'required',
		});
	}

	return (
		<OrdersPlatesUnConfirmedView handleConfirmRequest={handleConfirmRequest} cartTemporary={cartTemporary}/>
	);
};

