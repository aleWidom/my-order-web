"use client"
import { createContext } from 'react';
/* import { PlateRestaurant, PlateSelected, CategoryRestaurant } from '../../interfaces';
import { ModalPlate } from '../../interfaces/interfaces'; */

interface ContextProps {
	menuWaiterActive: boolean;
	setMenuWaiterActive: (description: boolean) => void;
/* 	modalPlate: ModalPlate;
	setModalPlate: (description: ModalPlate) => void; */
	/* cartTemporary: PlateSelected[];
	setCartTemporary: (description: PlateSelected[]) => void; */
	/* cartDefinitive: PlateSelected[];
	setCartDefinitive: (description: PlateSelected[]) => void; */
	/* loading: boolean;
	setLoading: (description: boolean) => void;
	loadingOrder: boolean;
	setLoadingOrder: (description: boolean) => void; */
/* 	clickedButtonEditOrDelete: string;
	setClickedButtonEditOrDelete: (description: string) => void; */
}

export const OrderContext = createContext({} as ContextProps);
