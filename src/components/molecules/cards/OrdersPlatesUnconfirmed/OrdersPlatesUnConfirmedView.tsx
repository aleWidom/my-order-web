

import { OrderPlateUnConfirmed } from '../OrderPlateUnConfirmed';
import { PlateSelected } from '@/interfaces';
import styles from './OrdersPlatesUnconfirmed.module.scss';

interface Props {
	handleConfirmRequest: () => void;
	cartTemporary: PlateSelected[]
}

export const OrdersPlatesUnConfirmedView = ({cartTemporary, handleConfirmRequest}: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderUnconfirmed}>Tu Pedido</h3>
			{cartTemporary.map((cartProduct, i) => (
				<OrderPlateUnConfirmed key={cartProduct.ItemID} cartProduct={cartProduct}/>
			))}
			<button className={styles.confirm} onClick={handleConfirmRequest}>Solicitar Pedido</button>
		</div>
	);
};



