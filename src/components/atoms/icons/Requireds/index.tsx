"use client"
import { useContext } from "react";
import { OrderContext, TableContext } from "@/context";
import { RequiredsView } from "./RequiredsView";
import { useSearchParams } from "next/navigation";


export const Requireds = () => {

	const { cartTemporary, cartDefinitive, modalPlate } = useContext(OrderContext);

    const {table} = useContext(TableContext)

	return (
		<>
		{(cartTemporary.length || cartDefinitive.length) /* && modalPlate.stateModal === false */ ?
		<RequiredsView tableID={table.TableID}/> : ""} 
		</>
		
	)
};




