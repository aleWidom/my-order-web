"use client"
import { useState } from 'react';
import { OrderContext } from './OrderContext';
/* import { PlateRestaurant, PlateSelected, CategoryRestaurant, ModalPlate } from '../../interfaces'; */


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const OrderProvider = ({ children }: Props) => {

	/* const [itemsRestaurant, setItemsRestaurant] = useState<PlateRestaurant[]>([]);

	const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState<CategoryRestaurant[]>([]);

	const [cardsRankingPlates, setCardsRankingPlates] = useState<PlateRestaurant[]>([]);

	const [cardsDayPlates, setCardsDayPlates] = useState<PlateRestaurant[]>([]);

	const [cardsSpecialsCheff, setCardsSpecialsCheff] = useState<PlateRestaurant[]>([]); */

	

/* 	const [modalPlate, setModalPlate] = useState<ModalPlate>({
		ItemID: '',
		title: '',
		description: '',
		price: '0',
		quantity: 1,
		stateModal: false,
		modalType: 'main'
	});

	const [cartTemporary,setCartTemporary,] = useState<PlateSelected[]>([]);

	const [cartDefinitive,setCartDefinitive,] = useState<PlateSelected[]>([]);

	const [loading, setLoading] = useState<boolean>(true);

	const [loadingOrder, setLoadingOrder] = useState<boolean>(true);

	const [clickedButtonEditOrDelete, setClickedButtonEditOrDelete] = useState<string>('false'); */

	return (
		<OrderContext.Provider
			value={{
				/* itemsRestaurant, 
				setItemsRestaurant,
				categoriesMenuRestaurant,
				setCategoriesMenuRestaurant,
				cardsRankingPlates,
				setCardsRankingPlates,
				cardsDayPlates,
				setCardsDayPlates, */
				/* modalPlate,
				setModalPlate,
				cartTemporary,
				setCartTemporary,
				cartDefinitive,
				setCartDefinitive,
				loading,
				setLoading,
				cardsSpecialsCheff,
				setCardsSpecialsCheff,
				loadingOrder, 
				setLoadingOrder,
				clickedButtonEditOrDelete, 
				setClickedButtonEditOrDelete */
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
