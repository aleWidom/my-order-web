"use client"
import { useContext, useEffect } from "react";
import { SearchContext } from "@/context";
import { MenuPlatesView } from "./MenuPlatesView";
import { useFetchItems } from "@/hooks";
import { fetchItemsRestaurant } from "@/services";



export const MenuPlates = () => {
	
	const { results, categorySelected } = useContext(SearchContext);

	return (
		<MenuPlatesView results={results} categorySelected={categorySelected}/>
	);
};
