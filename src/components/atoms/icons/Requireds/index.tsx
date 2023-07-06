import { useContext } from "react";
import { OrderContext } from "@/context";
import { RequiredsView } from "./RequiredsView";


export const Requireds = () => {

	const { cartTemporary, cartDefinitive, modalPlate } = useContext(OrderContext);

	return (
		<>
		{(cartTemporary.length || cartDefinitive.length) && modalPlate.stateModal === false ?
		<RequiredsView/> : ""} 
		</>
		
	)
};




