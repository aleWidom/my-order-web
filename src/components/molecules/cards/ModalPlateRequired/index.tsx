"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context';
import { ModalPlateRequiredView } from './ModalPlateRequiredView';
import { useSearchParams } from 'next/navigation';

export const ModalPlateRequired = () => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const params = useSearchParams();

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
			{params.get('table') !== undefined &&
				<ModalPlateRequiredView header={"Solicitud Agregada"} title={modalPlate.title} quantity={modalPlate.quantity} />
			}
		</>
	)
};

/* 
{page !== '/' && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'edit' && (
	<>
		<div className={styles.containerAdd}>
			<small>Solicitud Editada</small>
			<FaRegCheckCircle className={styles.check} />
		</div>
		<h2 className={styles.title}>{modalPlate.title}</h2>
		<p className={styles.quantity}>Cantidad: {`${modalPlate.quantity} u.`}</p>
	</>
)}
{page !== '/' && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'delete' && (
	<>
		<div className={styles.containerSubstract}>
			<small>Solicitud Eliminada</small>
			<FaTrashAlt className={styles.delete} />
		</div>
		<h2 className={styles.title}>{modalPlate.title}</h2>
		<p className={styles.quantity}>Cantidad: {`${modalPlate.quantity} u.`}</p>
	</>
)}
{page !== '/' && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'confirm' && (
	<div className={styles.containerAdd}>
		<FaRegCheckCircle className={styles.check} />
		<small>Su pedido se ha procesado correctamente.</small>
	</div>
)} */