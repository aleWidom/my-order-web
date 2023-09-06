"use client"
import { useContext } from "react";
import { SearchContext } from "@/context";
import { MenuPlatesView } from "./MenuPlatesView";

export const MenuPlates = () => {
	
	const { results, categorySelected } = useContext(SearchContext);

	return (
		<MenuPlatesView results={results} categorySelected={categorySelected}/>
	);
};
