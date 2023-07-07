import { PlateSelected } from '@/interfaces';
import styles from './OrdersPlatesConfirmed.module.scss';
import { OrderPlateConfirmed } from '../OrderPlateConfirmed';

interface Props {
	cartDefinitive: PlateSelected[]
}

export const OrdersPlatesConfirmedView = ({ cartDefinitive }: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderConfirmed}>Ordenes Solicitadas</h3>
			{cartDefinitive.map((cartProduct, i) => (
				<OrderPlateConfirmed key={i} cartProduct={cartProduct} />
			))}
		</div>
	);
};
