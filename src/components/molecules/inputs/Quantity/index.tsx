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
	tableNumber: string | undefined,
	price: string,
	title: string,
	idItem: string
}

export const Quantity = ({ tableNumber, price, title, idItem }: QuantityProps) => {

	const [quantity, setQuantity] = useState(0)

	const [buttonQuantity, setButtonQuantity] = useState(false)

/* 	const [request, setRequest] = useState("inactive") */

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
		
		setButtonQuantity(false)

		itemPeopleInTable({
			numberTable: tableNumber,
			orderNumber: idOrder,
			idPeopleInTable: "26838345-28ec-4b64-bc59-7bd9dc305791",
			detail: [{
				id_item: idItem,
				price: price,
				quantity,
				title
			}]
		})



	};

	return (

		<>
			{
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

/* else if (event.queryStringParameters?.itemPeopleInTable !== undefined) {
	queryMySql = `INSERT INTO Item_peopleInTable (ItemPeopleInTableID, orderNumberID, id_peopleInTable, numberTable, quantity, id_item, state)
	VALUES ${body.detail.map((value)=> (
		`(${JSON.stringify(value.ItemPeopleInTableID)}, ${JSON.stringify(body.orderNumber)}, ${JSON.stringify(body.idPeopleInTable)}, ${JSON.stringify(body.numberTable)}, ${JSON.stringify(value.quantity)}, ${JSON.stringify(value.id_item)}, 'in process')`
	))}`
} */