"use client"
import { useLayoutEffect, useState } from 'react';
import { CallWaiterView } from './CallWaiterView';
/* import { SearchContext, TableContext } from '../../../../context'; */
import { fetchTable, updateTableNumberCall, updateTableNumberNotCall } from '../../../../services';


interface CallWaiterProps {
	tableID: string | undefined
}

export const CallWaiter = ({tableID}: CallWaiterProps) => {

	const [sittingOnTheTableCall ,setSittingOnTheTableCall] = useState(false)

	useLayoutEffect(() => {
		fetchTable(tableID)
        .then((response)=> {
           if(response !== undefined) {
            if(response?.table_call === '1') {
                setSittingOnTheTableCall(true)
               }
               else {
                setSittingOnTheTableCall(false)
               }
           }
        })
        .catch((err)=> {
            console.log(err)
        })
	}, [])




	const handleCall = () => {
	/* 	setModalInfo({
			description: 'Su moza/o se acercará a su mesa.',
			state: true,
			section: 'call',
		}); */

		/* setTimeout(() => {
			setModalInfo({
				description: '',
				state: false,
				section: '',
			});
		}, 3000); */

		updateTableNumberCall(tableID); 
		setSittingOnTheTableCall(true);

	};

	const handleNotCall = () => {
		/* setModalInfo({
			description: 'Se ha cancelado el llamado de su moza/o a su mesa.',
			state: true,
			section: 'call',
		}); */

	/* 	setTimeout(() => {
			setModalInfo({
				description: '',
				state: false,
				section: '',
			});
		}, 3000); */

	    updateTableNumberNotCall(tableID)
		setSittingOnTheTableCall(false);
	};

	return(
		<>
		{
			sittingOnTheTableCall ? 
			<CallWaiterView message={"Cancelar llamado moza/o a la maesa."} handleCallOrNotCall={handleNotCall} color={"red"}/> :
			<CallWaiterView message={"Llamar a moza/o a la mesa."} handleCallOrNotCall={handleCall} color={"green"}/> 
		}
		</>
	)
	
};