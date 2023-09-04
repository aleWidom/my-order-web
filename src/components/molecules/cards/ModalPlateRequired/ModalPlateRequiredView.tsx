import { FaBell, FaRegCheckCircle } from 'react-icons/fa';
import styles from './ModalPlateRequired.module.scss'

interface Props {
	header: string,
	title: string,
	quantity: number,
	selection: string,
	children: React.ReactNode

}

export const ModalPlateRequiredView = ({ header, title, quantity, children, selection }: Props) => {
	return (
		<div className={styles.containerModalPlate}>
			<div className={styles.modalPlate}>
				<div className={selection === "delete" ? styles.containerSubstract : styles.containerAdd}>
					<small>{header}</small>
					{children}
				</div>
				<h2 className={styles.title}>{title}</h2>
				{selection !== "confirm" && <p className={styles.quantity}>Cantidad: {`${quantity} u.`}</p>}
				{selection === "request" &&
					<>
						<small className={styles.edit}>Para editar la orden puede ir a sección mis solicitudes</small>
						<FaBell className={styles.edit} style={{ marginLeft: '0.4rem' }} />
					</>
				}
			</div>
		</div>
	);
};

