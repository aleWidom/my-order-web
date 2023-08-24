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

	console.log(idPeopleInTable)
	
	const handleConfirmRequest = () => {

/* 		if(localStorage.getItem('idPeopleTableId')) { */
			//agrego a la base de datos cada uno de los items pedidos y cantidad y a que PeopleTableId corresponde
		cartTemporary.map((e) => (
			itemPeopleInTable(uuidv4().replaceAll('/', 'a'), idPeopleInTable, e.quantity, e.ItemID)
		))

		//seteo como cart Definitivo, el cartTemporary + lo que esta de antes como definitivo, la misma información la guardo en el localstorage
		setCartDefinitive([
			...cartTemporary, ...cartDefinitive
		])
		/* localStorage.setItem('cartDefinitive', JSON.stringify([
			...cartTemporary,
			...JSON.parse(localStorage.getItem('cartDefinitive') as any)
		])) */


		//seteo el carrito temporario como vacio, y guardo lo mismo en el local storage
		setCartTemporary([])
	/* 	localStorage.setItem('cartTemporary', JSON.stringify([])) */


		setModalPlate({
			...modalPlate,
			stateModal: true,
			modalEditOrDeleteOrConfirm: 'confirm',
			modalType: 'required',
		});
		/* } */
	}

	return (
		<OrdersPlatesUnConfirmedView handleConfirmRequest={handleConfirmRequest} cartTemporary={cartTemporary}/>
	);
};

