"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context';
import { ModalPlateRequiredView } from './ModalPlateRequiredView';
import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';




export const ModalPlateRequired = () => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	console.log(modalPlate)

	useEffect(() => {
		setTimeout(() => {
			setModalPlate({
				ItemID: '',
				title: '',
				quantity: 1,
				stateModal: false,
				description: "",
				price: "",
				modalType: 'main',
				headerModalRequest: ""
			});

		}, 4000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalPlate]);

	return (
		<>
			<ModalPlateRequiredView header={modalPlate.headerModalRequest} title={modalPlate.title} quantity={modalPlate.quantity} stateOrder={modalPlate.stateOrder}>
				{modalPlate.stateOrder === "orderError" ? <FaTimesCircle/> : <FaRegCheckCircle/>}
			</ModalPlateRequiredView>
		</>
	)
};

