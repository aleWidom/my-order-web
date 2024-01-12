"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
/* import { QuantityView } from './QuantityView' */

const signSubstract = {
	fontSize: "1.3rem",
}

const signSubstractInactive = {
	fontSize: "1.3rem",
	color: "rgb(87, 87, 87)"
}


const signAdd = {
	fontSize: "1.3rem"
}

const signAddInactive = {
	fontSize: "1.3rem",
	color: "rgb(87, 87, 87)"
}


export const Quantity = () => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const page = "/"

	const addQuantity = () => {
		if (modalPlate.quantity > 0 && modalPlate.quantity < 9) {
			setModalPlate({
				...modalPlate,
				quantity: modalPlate.quantity + 1,
			});
		}
	};

	const substractQuantity = () => {
		if (modalPlate.quantity > 1) {
			setModalPlate({
				...modalPlate,
				quantity: modalPlate.quantity - 1,
			});
		}
	};

	return (
		<>
			{/* {page === '/' || modalPlate.stateOrder === 'edit' ?
				<QuantityView
					modalPlate={modalPlate}
					substract={{ operation: substractQuantity, styleSign: modalPlate.quantity > 1 ? signSubstract : signSubstractInactive}}
					add={{ operation: addQuantity, styleSign: modalPlate.quantity > 0 && modalPlate.quantity < 9 ? signAdd : signAddInactive}} /> :
				`${modalPlate.quantity} u.`} */}
		</>
	)
}


import { ModalPlate } from '@/interfaces';
import styles from './QuantityView.module.scss'

interface Props {
    modalPlate: ModalPlate;
    substract: any;
    add: any
}

/* export const QuantityView = ({ modalPlate, substract, add }: Props) => {
    return (
        <div className={styles.containerQuantitySigns}>
            <button onClick={substract.operation} className={styles.buttonQuantity}>
                <p className={styles.containerSign}>
                    <small style={substract.styleSign}>-</small>
                </p>
            </button>
            <p className={styles.quantitySelected}>{modalPlate.quantity}</p>
            <button onClick={add.operation} className={styles.buttonQuantity}>
                <p className={styles.containerSign}>
                    <small style={add.styleSign}>+</small>
                </p>
            </button>
        </div>
    )
}


 */