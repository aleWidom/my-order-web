"use client"
import { useContext } from 'react';
import { OrderContext, SearchContext } from '@/context';
import { CategoriesView } from './CategoriesView';
import { CategoryRestaurant } from '@/interfaces';


export const Categories = () => {

	const { categoriesMenuRestaurant} = useContext(OrderContext) 

	return (
		<>
		{categoriesMenuRestaurant.length ? <CategoriesView categoriesMenuRestaurant={categoriesMenuRestaurant}/> : ""}
		</>
	);
};

