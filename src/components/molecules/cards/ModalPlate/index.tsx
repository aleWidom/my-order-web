import { useContext } from 'react';
import { ModalPlateView } from './ModalPlateView';
import { OrderContext } from '@/context';

interface Props {
	buttonName: string;
}

export const ModalPlate= ({ buttonName }: Props) => {
	const { modalPlate, setModalPlate, cartTemporary, setCartTemporary } = useContext(OrderContext);

/* 	const { pathname } = useLocation(); */
/* 
	const page = pathname.slice(-5); */

	const closedModalPlate = () => {
		setModalPlate({
			ItemID: '',
			title: '',
			description: '',
			price: '0',
			quantity: 1,
			stateModal: false,
		});
	};



	const handleClickRequest = () => {

		if (localStorage.getItem('idPeopleTableId') && localStorage.getItem('idPeopleTableId') !== "undefined" ) {
			console.log(localStorage.getItem('idPeopleTableId'))
			setCartTemporary(
				[{
					ItemID: modalPlate.ItemID,
					title: modalPlate.title,
					quantity: modalPlate.quantity,
					price: modalPlate.price,
				},
				...cartTemporary])

			localStorage.setItem('cartTemporary', JSON.stringify([{
				ItemID: modalPlate.ItemID,
				title: modalPlate.title,
				quantity: modalPlate.quantity,
				price: modalPlate.price,
			},
			...cartTemporary
			]))



			setModalPlate({
				...modalPlate,
				modalType: 'required',
				modalEditOrDeleteOrConfirm: 'temporary',
			});
		}

	};

	const handleEdit = () => {
		if (localStorage.getItem('idPeopleTableId') && localStorage.getItem('idPeopleTableId') !== "undefined") {
			const cartTemporaryEdit = cartTemporary.filter((item, i) => {
				if (i === modalPlate.index) {
					item.quantity = modalPlate.quantity
				}
				return item
			})

			setCartTemporary(cartTemporaryEdit)

			localStorage.setItem('cartTemporary', JSON.stringify(cartTemporaryEdit))

			setModalPlate({
				...modalPlate,
				modalType: 'required',
				modalEditOrDeleteOrConfirm: 'edit',
			});
		}
	};

	const handleDelete = () => {

		if (localStorage.getItem('idPeopleTableId') && localStorage.getItem('idPeopleTableId') !== "undefined")  {
			const cartTemporaryDelete = cartTemporary.filter((item, index) => {
				return index !== modalPlate.index
			})
	
			setCartTemporary(cartTemporaryDelete)
	
			localStorage.setItem('cartTemporary', JSON.stringify(cartTemporaryDelete))
	
			setModalPlate({
				...modalPlate,
				modalType: 'required',
				modalEditOrDeleteOrConfirm: 'delete',
			});
		}
	};

	const addQuantity = () => {
		setModalPlate({
			...modalPlate,
			quantity: modalPlate.quantity + 1,
		});
	};

	const substractQuantity = () => {
		setModalPlate({
			...modalPlate,
			quantity: modalPlate.quantity - 1,
		});
	};

	return (
		<ModalPlateView modalPlate={modalPlate} closedModalPlate={closedModalPlate}/>
	);
};


{/* <div className={styles.containerQuantity}>
					<p className={styles.quantity}>Cantidad: </p>
					{page === '/' || modalPlate.modalEditOrDeleteOrConfirm === 'edit' ? (
						<div className={styles.containerQuantitySigns}>
							{modalPlate.quantity > 1 ? (
								<button onClick={substractQuantity} className={styles.buttonQuantitySubstract}>
									<p>
										<small className={styles.signSubstract}>-</small>
									</p>
								</button>
							) : (
								<button className={styles.buttonQuantitySubstract}>
									<p>
										<small className={styles.signSubstractInactive}>-</small>
									</p>
								</button>
							)}
							<p className={styles.quantitySelected}>{modalPlate.quantity}</p>
							{modalPlate.quantity > 0 && modalPlate.quantity < 9 ? (
								<button onClick={addQuantity} className={styles.buttonQuantityAdd}>
									<p>
										<small className={styles.signAdd}>+</small>
									</p>
								</button>
							) : (
								<button className={styles.buttonQuantityAdd}>
									<p>
										<small className={styles.signAddInactive}>+</small>
									</p>
								</button>
							)}
						</div>
					) : (
						`${modalPlate.quantity} u.`
					)} 
				</div>
				{page === '/' && (
					<button onClick={handleClickRequest} className={styles.request}>
						{buttonName}
						<FaRegCheckCircle />
					</button>
				)}
				{page !== '/' && buttonName === 'Editar' && (
					<button onClick={handleEdit} className={styles.request}>
						{buttonName}
						<FaRegCheckCircle />
					</button>
				)}
				{page !== '/' && buttonName === 'Eliminar' && (
					<button onClick={handleDelete} className={styles.requestTrash}>
						{buttonName}
						<FaTrashAlt />
					</button>
				)}  */}