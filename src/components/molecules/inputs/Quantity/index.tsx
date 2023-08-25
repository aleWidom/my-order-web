"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
import { QuantityView } from './QuantityView'

const signSubstract = {
	fontSize: "1.3rem",
}

const signSubstractInactive = {
	fontSize: "1.3rem",
	color: "rgb(87, 87, 87)"
}


const signAdd = {
	fontSize: "1.3rem"
}

const signAddInactive = {
	fontSize: "1.3rem",
	color: "rgb(87, 87, 87)"
}


export const Quantity = () => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const page = "/"

	const addQuantity = () => {
		if (modalPlate.quantity > 0 && modalPlate.quantity < 9) {
			setModalPlate({
				...modalPlate,
				quantity: modalPlate.quantity + 1,
			});
		}
	};

	const substractQuantity = () => {
		if (modalPlate.quantity > 1) {
			setModalPlate({
				...modalPlate,
				quantity: modalPlate.quantity - 1,
			});
		}
	};

	return (
		<>
			{page === '/' || modalPlate.modalEditOrDeleteOrConfirm === 'edit' ?
				<QuantityView
					modalPlate={modalPlate}
					substract={{ operation: substractQuantity, styleSign: modalPlate.quantity > 1 ? signSubstract : signSubstractInactive}}
					add={{ operation: addQuantity, styleSign: modalPlate.quantity > 0 && modalPlate.quantity < 9 ? signAdd : signAddInactive}} /> :
				`${modalPlate.quantity} u.`}
		</>
	)
}


