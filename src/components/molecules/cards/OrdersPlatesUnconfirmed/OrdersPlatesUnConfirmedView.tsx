
import { OrderPlateUnConfirmedView as OrderPlateUnConfirmed } from '@/components/molecules';
import { PlateSelected } from '@/interfaces';
import styles from './OrdersPlatesUnconfirmed.module.scss';

interface Props {
	handleEdit: any;
	handleDelete: any;
	handleConfirmRequest: () => void;
	cartTemporary: PlateSelected[]
}

export const OrdersPlatesUnConfirmedView = ({handleEdit, handleDelete, cartTemporary, handleConfirmRequest}: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderUnconfirmed}>Tu Pedido</h3>
			{cartTemporary.map((cartProduct, i) => (
				<OrderPlateUnConfirmed key={cartProduct.ItemID} cartProduct={cartProduct}  handleEdit={handleEdit} handleDelete={handleDelete}/>
			))}
			<button className={styles.confirm} onClick={handleConfirmRequest}>Solicitar Pedido</button>
		</div>
	);
};



