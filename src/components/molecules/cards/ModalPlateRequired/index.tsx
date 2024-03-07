"use client"
import { useEffect } from 'react';
import { useOrdersStore } from '@/store';
import styles from './ModalPlateRequired.module.scss'
import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface ModalPlateRequiredProps {
	request: boolean
}


export const ModalPlateRequired = ({ request }: ModalPlateRequiredProps) => {

	const setRequest = useOrdersStore(state => state.setRequest)

	const messageRequest = useOrdersStore(state => state.messageRequest)

	const setMessageRequest = useOrdersStore(state => state.setMessageRequest)

	useEffect(() => {
		setTimeout(() => {
			setRequest(false)
			setMessageRequest("")
		}, 2250);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [request]);

	return (
		<>
			{messageRequest === "success" &&
				<div className={styles.containerModalPlate}>
					<div className={styles.modalPlate}>
						<FaRegCheckCircle className={styles.iconSuccess} />
						<p className={styles.titleSuccess}>Su pedido se ha realizado correctamente.</p>
					</div>
				</div>
			}
			{messageRequest === "error" &&
				<div className={styles.containerModalPlate}>
					<div className={styles.modalPlate}>
						<FaTimesCircle className={styles.iconError} />
						<p className={styles.titleError}>Vuelva a solicitar el pedido por favor.</p>
					</div>
				</div>
			}
			{messageRequest === "cancel" &&
				<div className={styles.containerModalPlate}>
					<div className={styles.modalPlate}>
						<FaTimesCircle className={styles.iconError} />
						<p className={styles.titleError}>Se ha cancelado su solicitud.</p>
					</div>
				</div>
			}
		</>
	)
};

