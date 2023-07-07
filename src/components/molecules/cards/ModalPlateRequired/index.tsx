"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context';
import { ModalPlateRequiredView } from './ModalPlateRequiredView';

export const ModalPlateRequired = () => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	/* const { pathname } = useLocation();

	const page = pathname.slice(-5); */


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

	return(
		<ModalPlateRequiredView/>
	)
};

/* {page === '/' && (
	<>
		<div className={styles.containerAdd}>
			<small>Solicitud Agregada</small>
			<FaRegCheckCircle className={styles.check} />
		</div>
		<h2 className={styles.title}>{modalPlate.title}</h2>
		<p className={styles.quantity}>Cantidad: {`${modalPlate.quantity} u.`}</p>
		<small className={styles.edit}>Para editar la orden puede ir a sección mis solicitudes</small>
		<FaBell className={styles.edit} style={{ marginLeft: '0.4rem' }} />
	</>
)}
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