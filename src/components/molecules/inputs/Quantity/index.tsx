"use client"
import { useEffect, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import styles from './Quantity.module.scss'
import { itemPeopleInTable } from '@/services';

/* const signSubstract = {
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
 */

interface QuantityProps {
	tableNumber: string | undefined
}

export const Quantity = ({tableNumber}: QuantityProps) => {

	const [quantity, setQuantity] = useState(0)

	const [buttonQuantity, setButtonQuantity] = useState(false)

	const [request, setRequest] = useState("inactive")

	/* useEffect(() => {
		if (request === "inProcess") {
			setTimeout(() => {
				setRequest("success")
			}, 10000);
		}
	}, [request]) */


	const addItem = () => {
		setButtonQuantity(true)
		setQuantity(1)
	}

	const deleteItem = () => {
		setButtonQuantity(false)
	};

	const addQuantity = () => {
		setQuantity(quantity + 1)
	};

	const substractQuantity = () => {
		setQuantity(quantity - 1)
	};

	const submit = () => {

		const idOrder = uuidv4().replaceAll('/', 'a')

		const idOrder2 = uuidv4().replaceAll('/', 'a')

		setButtonQuantity(false)

		itemPeopleInTable({
			numberTable: tableNumber,
			orderNumber: idOrder,
			idPeopleInTable: idOrder2,
			detail: []
		}) 
	
	};

	const deleteRequest = () => {
		setRequest("inactive")
		setButtonQuantity(false)
	};

	return (

		<>
			{
				/* request === "inProcess" || request === "success" ?
					<div >
						{request === "inProcess" && <button onClick={deleteRequest} className={styles.deleteRequest}>Cancelar solicitud.</button>}
						{request === "success" && <button className={styles.success}>Solicitado.</button>}
					</div>
					: */
					buttonQuantity === false ? <button onClick={addItem} className={styles.buttonQuantity}>+</button> :
						<div className={styles.containerActive}>
							<div className={styles.containerQuantity}>
								{quantity > 1 ? <button onClick={substractQuantity} className={styles.buttonSign}>-</button> : <button onClick={deleteItem} className={styles.buttonSignTrash}><FaRegTrashAlt /></button>}
								<small style={{ color: "white" }}>{quantity}u.</small>
								<button onClick={addQuantity} className={styles.buttonSign}>+</button>
							</div>
							<button onClick={submit} className={styles.request}>Solicitar</button>
						</div>
			}
		</>

	)
}

{/* <div className={styles.containerQuantity}>
		{addPlate === false ?:
		<>
		<div >
			{quantity > 1 ? <button onClick={substractQuantity}>-</button> : <button onClick={deleteItem }><FaRegTrashAlt/></button>}
			<small style={{color: "grey"}}>{quantity}u.</small>
			<button onClick={addQuantity}>+</button>
		</div>
		{request ? 
		<button onClick={deleteRequest}>Cancelar solicitud.</button>:
			<>
		 <button onClick={submit}>Solicitar</button>
		 </>
		  }
		</>
		}		
		</div> */}

{/* {page === '/' || modalPlate.stateOrder === 'edit' ?
				<QuantityView
					modalPlate={modalPlate}
					substract={{ operation: substractQuantity, styleSign: modalPlate.quantity > 1 ? signSubstract : signSubstractInactive}}
					add={{ operation: addQuantity, styleSign: modalPlate.quantity > 0 && modalPlate.quantity < 9 ? signAdd : signAddInactive}} /> :
				`${modalPlate.quantity} u.`} */}


/* import { ModalPlate } from '@/interfaces';
import styles from './QuantityView.module.scss'

interface Props {
	modalPlate: ModalPlate;
	substract: any;
	add: any
} */

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