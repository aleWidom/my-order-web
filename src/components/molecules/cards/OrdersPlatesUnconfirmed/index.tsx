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

				console.log(modalPlate)
		
				setModalPlate({
					...modalPlate,
					stateModal: true,
					stateOrder: 'orderConfirmed',
					modalType: 'required',
					headerModalRequest: "Su pedido se ha solicitado correctamente."
				});
			} else {
				
				setLoadingButton(false)

				setModalPlate({
					...modalPlate,
					stateModal: true,
					stateOrder: 'orderError',
					modalType: 'required',
					headerModalRequest: "Por favor vuelva a solicitar el pedido."
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

