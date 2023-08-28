import { FaBell, FaRegCheckCircle } from 'react-icons/fa';
import styles from './ModalPlateRequired.module.scss'

interface Props {
	header: string,
	title: string,
	quantity: number
}

export const ModalPlateRequiredView = ({header, title, quantity}: Props) => {
	return (
		<div className={styles.containerModalPlate}>
			<div className={styles.modalPlate}>
				<div className={styles.containerAdd}>
					<small>{header}</small>
					<FaRegCheckCircle className={styles.check} />
				</div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.quantity}>Cantidad: {`${quantity} u.`}</p> 
				<small className={styles.edit}>Para editar la orden puede ir a sección mis solicitudes</small>
				<FaBell className={styles.edit} style={{ marginLeft: '0.4rem' }} />
			</div>
		</div>
	);
};

