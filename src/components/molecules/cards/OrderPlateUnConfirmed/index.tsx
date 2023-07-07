"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
import { OrderPlateUnConfirmedView } from './OrderPlateUnConfirmedView';
import { PlateSelected } from '@/interfaces'



interface Props {
  cartProduct: PlateSelected;
}

export const OrderPlateUnConfirmed= ({ cartProduct }: Props) => {

    
    const {modalPlate, setModalPlate} = useContext(OrderContext);

    
	const handleEdit = (cartProduct: PlateSelected, i: number) => () => {

		setModalPlate({
			...modalPlate,
			stateModal: true,
			title: cartProduct.title,
			price: cartProduct.price,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDeleteOrConfirm: 'edit',
			index: i
		});
	};


	const handleDelete = (cartProduct: PlateSelected, i: number) => () => {
		setModalPlate({
			...modalPlate,
			stateModal: true,
			price: cartProduct.price,
			title: cartProduct.title,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDeleteOrConfirm: 'delete',
			index: i
		});
	};

  return (
    <>
      <OrderPlateUnConfirmedView cartProduct={cartProduct} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </>
  )
}
