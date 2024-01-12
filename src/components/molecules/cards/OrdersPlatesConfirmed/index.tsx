"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
import { OrdersPlatesConfirmedView } from './OrdersPlatesConfirmedView';





export const OrdersPlatesConfirmed = () => {

	const { cartDefinitive} = useContext(OrderContext);

	return (
		<OrdersPlatesConfirmedView cartDefinitive={cartDefinitive} />
	);
};

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
