"use client"
import { useContext } from "react";
import { OrderContext, TableContext } from "@/context";
import { RequiredsView } from "./RequiredsView";

export const Requireds = () => {

	const { cartTemporary, cartDefinitive } = useContext(OrderContext);

    const {table} = useContext(TableContext)

	return (
		<>
		{(cartTemporary.length || cartDefinitive.length) ?
		<RequiredsView tableID={table.TableID}/> : ""} 
		</>
		
	)
};




