import { FaBell } from 'react-icons/fa';
import styles from './ModalPlateRequired.module.scss'

interface Props {
	header: string | undefined,
	title: string,
	quantity: number,
	stateOrder: string | undefined,
	children: React.ReactNode

}

export const ModalPlateRequiredView = ({ header, title, quantity, children, stateOrder }: Props) => {
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

