"use client"
import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; 
import { v4 as uuidv4 } from 'uuid';
import { fetchTable, peopleInTable, updateTableNumberActive } from '../services';
import { TableContext } from '../context';

export const useFetchTable = () => {
	const params = useSearchParams();

	const { setTable, setIdPeopleInTable } = useContext(TableContext);

	useEffect(() => {
		fetchTable(params.get('table'))
		.then((response) => {
			setTable({
				TableID: response?.TableID,
				table_number: response?.table_number,
				table_active: response?.table_active,
				table_call: response?.table_call,
			})

			if (response?.table_active === '0') {
				updateTableNumberActive(params.get('table'));

				//Genero el idPeopleInTable
				const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');
				setIdPeopleInTable(JSON.stringify(idPeopleInTableUuid));
				
				peopleInTable(idPeopleInTableUuid, params.get('table'));
			}
			
		})
		.catch((err)=> {
			console.log(err)
		})	
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};


