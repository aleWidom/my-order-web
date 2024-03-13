"use client"
import { useEffect, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { useOrdersStore, useTableStore } from '@/store';
import { itemPeopleInTable } from '@/services';
import styles from './Quantity.module.scss'
import { error } from 'console';


interface QuantityProps {
	price: string,
	title: string,
	idItem: string
}

export const Quantity = ({ price, title, idItem }: QuantityProps) => {

	const [quantity, setQuantity] = useState(0)

	const [buttonQuantity, setButtonQuantity] = useState(false)

	const table = useTableStore(state => state.tableRestaurant)

	const idPeopleInTable = useTableStore(state => state.idPeopleInTable)

	const setRequest = useOrdersStore(state => state.setRequest)

	const setMessageRequest = useOrdersStore(state => state.setMessageRequest)



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

		setRequest(true)

		itemPeopleInTable({
			orderNumber: idOrder,
			id_table: table.TableID,
			numberTable: table.table_number,
			idPeopleInTable,
			id_item: idItem,
			quantity

		})
			.then((response) => {
				if (response?.status === 200) {
					setMessageRequest("success")
				}
			})
			.catch((err: any) => {
				setMessageRequest("error")
				console.log(err)
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



