"use client"
import { useContext } from 'react';
import { CallWaiterView } from './CallWaiterView';
import { SearchContext, TableContext } from '../../../../context';
import { useFetchCallTable } from '../../../../hooks';
import { updateTableNumberCall, updateTableNumberNotCall } from '../../../../services';

const buttonNotCall = {
	border: "#fe0000 1px solid",
	color: "#fe0000",
}

const buttonCall = {
	border: " hsl(135, 70%, 51%) 1px solid",
	color: "hsl(135, 70%, 51%)"
}


export const CallWaiter = () => {

	const { setModalInfo } = useContext(SearchContext);

	const {sittingOnTheTableCall ,setSittingOnTheTableCall, table} = useContext(TableContext);
	

	const handleCall = () => {
		setModalInfo({
			description: 'Su moza/o se acercará a su mesa.',
			state: true,
			section: 'call',
		});

		setTimeout(() => {
			setModalInfo({
				description: '',
				state: false,
				section: '',
			});
		}, 3000);

		updateTableNumberCall(table.TableID);
		setSittingOnTheTableCall(true);

	};

	const handleNotCall = () => {
		setModalInfo({
			description: 'Se ha cancelado el llamado de su moza/o a su mesa.',
			state: true,
			section: 'call',
		});

		setTimeout(() => {
			setModalInfo({
				description: '',
				state: false,
				section: '',
			});
		}, 3000);

		updateTableNumberNotCall(table.TableID);
		setSittingOnTheTableCall(false);
	};

	return(
		<>
		{
			sittingOnTheTableCall ? 
			<CallWaiterView message={"Cancelar llamado moza/o a la maesa."} handleCallOrNotCall={handleNotCall} styleButton={buttonNotCall}/> :
			<CallWaiterView message={"Llamar a moza/o a la mesa."} handleCallOrNotCall={handleCall} styleButton={buttonCall}/> 
		}
		</>
	)
	
};

