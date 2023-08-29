"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
import { OrderPlateUnConfirmedView } from './OrderPlateUnConfirmedView';
import { PlateSelected } from '@/interfaces'

interface Props {
  cartProduct: PlateSelected;
  index: number
}

export const OrderPlateUnConfirmed= ({ cartProduct, index }: Props) => {

    const {modalPlate, setModalPlate} = useContext(OrderContext);

    const handleEdit = (cartProduct: PlateSelected, index: number) => () => {
		setModalPlate({
			...modalPlate,
			stateModal: true,
			title: cartProduct.title,
			price: cartProduct.price,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDeleteOrConfirm: 'edit',
			index: index
		});
	};

	const handleDelete = (cartProduct: PlateSelected, index: number) => () => {
		setModalPlate({
			...modalPlate,
			stateModal: true,
			price: cartProduct.price,
			title: cartProduct.title,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDeleteOrConfirm: 'delete',
			index: index
		});
	};

  return (
    <>
      <OrderPlateUnConfirmedView cartProduct={cartProduct} handleEdit={handleEdit} handleDelete={handleDelete} index={index}/>
    </>
  )
}
