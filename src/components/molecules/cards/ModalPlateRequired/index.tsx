"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context';
/* import { ModalPlateRequiredView } from './ModalPlateRequiredView'; */
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
			{/* <ModalPlateRequiredView header={modalPlate.headerModalRequest} title={modalPlate.title} quantity={modalPlate.quantity} stateOrder={modalPlate.stateOrder}>
				{modalPlate.stateOrder === "orderError" ? <FaTimesCircle/> : <FaRegCheckCircle/>}
			</ModalPlateRequiredView> */}
		</>
	)
};


import { FaBell } from 'react-icons/fa';
import styles from './ModalPlateRequired.module.scss'

interface Props {
	header: string | undefined,
	title: string,
	quantity: number,
	stateOrder: string | undefined,
	children: React.ReactNode

}

/* export const ModalPlateRequiredView = ({ header, title, quantity, children, stateOrder }: Props) => {
	console.log(title)
	return (
		<div className={styles.containerModalPlate}>
			<div className={styles.modalPlate}>
				<div className={stateOrder === "delete" || stateOrder === "orderError"  ? styles.containerSubstract : styles.containerAdd}>
					{children}
					<small>{header}</small>
				</div>
				<h2 className={styles.title}>{title}</h2>
				 {stateOrder === "temporary" || stateOrder === "edit" || stateOrder === "delete" ? <p className={styles.quantity}>Cantidad: {`${quantity} u.`}</p>: ""} 
				 {stateOrder === "temporary" &&
					<div className={styles.containerEditBell}>
						<FaBell className={styles.bell}/>
						<small className={styles.edit}>Edite su orden en la sección mis solicitudes.</small>
					</div>
				}  
			</div>
		</div>
	);
};
 */
