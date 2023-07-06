"use client"
import { useState } from 'react';
import { TableContext } from './TableContext';


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: Props) => {

	const [idPeopleInTable, setIdPeopleInTable] = useState<string>("");

	const [sittingOnTheTableCall, setSittingOnTheTableCall] = useState<boolean | undefined>(false);
	
	const [sittingOnTheTableActivate, setSittingOnTheTableActivate] = useState<boolean | undefined>(false);

	return (
		<TableContext.Provider
			value={{
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
