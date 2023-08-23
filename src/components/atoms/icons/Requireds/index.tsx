"use client"
import { useContext } from "react";
import { OrderContext } from "@/context";
import { RequiredsView } from "./RequiredsView";
import { useSearchParams } from "next/navigation";


export const Requireds = () => {

	const { cartTemporary, cartDefinitive, modalPlate } = useContext(OrderContext);

    const  {tableID}= JSON.parse(localStorage.getItem('table') as string)

	return (
		<>
		{(cartTemporary.length || cartDefinitive.length) /* && modalPlate.stateModal === false */ ?
		<RequiredsView tableID={tableID}/> : ""} 
		</>
		
	)
};




