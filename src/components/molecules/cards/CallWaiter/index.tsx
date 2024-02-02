import { useLayoutEffect, useState } from 'react';
import { useTableStore } from '@/store';
import { fetchTable, updateTableNumberCall, updateTableNumberNotCall } from '../../../../services';
import { CallWaiterView } from './CallWaiterView';

export const CallWaiter = () => {

	const [sittingOnTheTableCall ,setSittingOnTheTableCall] = useState(false)

	const table = useTableStore(state => state.tableRestaurant)

	useLayoutEffect(() => {
		fetchTable(table.TableID)
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
	}, [table])




	const handleCall = () => {
		updateTableNumberCall(table.TableID); 
		setSittingOnTheTableCall(true);

	};

	const handleNotCall = () => {
	    updateTableNumberNotCall(table.TableID)
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