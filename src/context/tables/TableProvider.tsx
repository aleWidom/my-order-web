"use client"
import { useState } from 'react';
import { TableContext } from './TableContext';
import { TableRestaurant } from '@/interfaces';


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: Props) => {

	const [table, setTable] = useState<TableRestaurant>({
		TableID: "",
		table_number: "",
		table_active: "",
		table_call: "",
	});

	const [idPeopleInTable, setIdPeopleInTable] = useState<string>("");

	const [sittingOnTheTableCall, setSittingOnTheTableCall] = useState<boolean | undefined>(false);
	
	const [sittingOnTheTableActivate, setSittingOnTheTableActivate] = useState<boolean | undefined>(false);

	return (
		<TableContext.Provider
			value={{
				table,
				setTable,
				idPeopleInTable, 
				setIdPeopleInTable,
				sittingOnTheTableCall, 
				setSittingOnTheTableCall,
				sittingOnTheTableActivate,
				setSittingOnTheTableActivate,
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
