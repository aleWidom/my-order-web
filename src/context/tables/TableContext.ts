"use client"
import { TableRestaurant } from '@/interfaces';
import { createContext } from 'react';



interface ContextProps {
	table: TableRestaurant,
	setTable: (description: TableRestaurant) => void,
	idPeopleInTable: string,
	setIdPeopleInTable: (description: string) => void;
	/* sittingOnTheTableCall: boolean | undefined;
	setSittingOnTheTableCall: (description: boolean | undefined ) => void; */
	sittingOnTheTableActivate: boolean | undefined;
	setSittingOnTheTableActivate: (description: boolean | undefined ) => void;
}

export const TableContext = createContext({} as ContextProps);
