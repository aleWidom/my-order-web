import { PlateSelected } from '@/interfaces';
import styles from './OrderPlateConfirmed.module.scss';

interface Props {
    cartDefinitive: PlateSelected[]
}

export const OrderPlateConfirmedView = ({cartDefinitive}: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderConfirmed}>Ordenes Solicitadas</h3>
			{cartDefinitive.map((cartProduct, i) => (
				<div key={i} className={styles.containerCardOrderDefinitive}>
					<div className={styles.containerDescription}>
						<h4 className={styles.title}>{cartProduct.title}</h4>
						<small className={styles.price} >Precio Unitario: ${cartProduct?.price}</small>
						<small className={styles.quantity}>Cantidad: {cartProduct.quantity} u.</small>
					</div>
                    
				</div>
			))}
		</div>
	);
};
