"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context';
import { ModalPlateRequiredView } from './ModalPlateRequiredView';
import { FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';


interface Props {
	selection: string
}

export const ModalPlateRequired = ({ selection }: Props) => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	console.log(selection)

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
			});

		}, 4000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalPlate]);

	return (
		<>
			{selection === "delete" ?
				<ModalPlateRequiredView header={"Solicitud Eliminada"} title={modalPlate.title} quantity={modalPlate.quantity} selection='delete'>
					<FaTrashAlt />
				</ModalPlateRequiredView>

				:
				<ModalPlateRequiredView header={selection === "orderConfirmed" ? "Su pedido se ha procesado correctamente" : selection === "edit" ? "Solicitud Editada" : "Solicitud Agregada"} title={modalPlate.title} quantity={modalPlate.quantity} selection={selection === "request" ? "request" : selection === "orderConfirmed" ? "orderConfirmed":""}>
					<FaRegCheckCircle />
				</ModalPlateRequiredView>
			}
		</>
	)
};

