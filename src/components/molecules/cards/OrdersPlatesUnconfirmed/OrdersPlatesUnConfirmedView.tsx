

import { OrderPlateUnConfirmed } from '../OrderPlateUnConfirmed';
import { PlateSelected } from '@/interfaces';
import styles from './OrdersPlatesUnconfirmed.module.scss';

interface Props {
	handleConfirmRequest: () => void;
	cartTemporary: PlateSelected[];
	loadingButton: boolean;
}

export const OrdersPlatesUnConfirmedView = ({cartTemporary, handleConfirmRequest, loadingButton }: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderUnconfirmed}>Tu Pedido</h3>
			{cartTemporary.map((cartProduct, i) => (
				<OrderPlateUnConfirmed key={i} cartProduct={cartProduct} index={i}/>
			))}
			{loadingButton ? <button className={styles.confirm} onClick={handleConfirmRequest}>Solicitando pedido...</button>: <button className={styles.confirm} onClick={handleConfirmRequest}>Solicitar Pedido</button>}
		</div>
	);
};



