"use client"
import { useContext } from 'react';
import { OrderContext} from '@/context';
import { CategoriesView } from './CategoriesView';

export const Categories = () => {

	const { categoriesMenuRestaurant} = useContext(OrderContext) 

	return (
		<>
		{categoriesMenuRestaurant.length ? <CategoriesView categoriesMenuRestaurant={categoriesMenuRestaurant}/> : ""}
		</>
	);
};

