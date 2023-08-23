"use client"
import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; 
import { v4 as uuidv4 } from 'uuid';
import { fetchTable, peopleInTable, peopleInTableFetch, updateTableNumberActive } from '../services';
import { TableContext } from '../context';

export const useFetchTable = () => {
	const params = useSearchParams();

	const { setIdPeopleInTable } = useContext(TableContext);




	useEffect(() => {


		console.log("aarrqwrqrqrqoaoaoaoaoaoaoaoao")
		//seteo en el storage con nombre table el número de mesa
		//TODO SIEMPRE DEBE EJECUTARSE? CREO QUE SOLO SI NO EXISTE

		fetchTable(params.get('table'))
			.then((response) => {				
				//si la mesa esta desocupada
				if (response?.table_active === '0') {
					
					console.log("soy ceri")
						

					updateTableNumberActive(params.get('table'));

					
					//Genero el idPeopleInTable
					const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');
					peopleInTable(idPeopleInTableUuid, params.get('table'));
				 	localStorage.setItem('idPeopleTableId', JSON.stringify(idPeopleInTableUuid)); 
					setIdPeopleInTable(JSON.stringify(idPeopleInTableUuid));

					localStorage.setItem('table', JSON.stringify({
						tableID: response?.TableID,
						tableNumber: response?.table_number
					}));
			
				}
				//si la mesa esta ocupada
				else {
					//si la mesa esta activa pero no existe el localstorage idPeopleTableId busco el último PeopleInTable y lo seteo en el local storage (esto es por si entra otro celular a la misma mesa)
					//activo la mesa
					/* if (!localStorage.getItem('idPeopleTableId')) {
						peopleInTableFetch(params.get('table'))
							.then((response) => {
								if (response !== undefined) {
									localStorage.setItem('idPeopleTableId', JSON.stringify(response[0].PeopleInTableID));
									setIdPeopleInTable(JSON.stringify(response[0].PeopleInTableID));
								}
							})
							.catch((err) => {
								console.log(err);
							});
					} */
				}
			})
			.catch((err) => {
				console.log(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
