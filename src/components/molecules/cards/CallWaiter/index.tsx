import { useLayoutEffect } from 'react';
import { useSearchStore, useTableStore } from '@/store';
import { fetchTable, updateTableNumberCall, updateTableNumberNotCall } from '../../../../services';
import { CallWaiterView } from './CallWaiterView';

export const CallWaiter = () => {

	const table = useTableStore(state => state.tableRestaurant)

	const sittingOnTheTableCall = useTableStore(state => state.sittingOnTheTableCall)

	const setSittingOnTheTableCall = useTableStore(state => state.setSittingOnTheTableCall)

	const modalInfo = useSearchStore(state => state.modalInfo)

	const setModalInfo = useSearchStore(state => state.setModalInfo)


	const handleCall = () => {
		updateTableNumberCall(table.TableID);
		setSittingOnTheTableCall(true);
		setModalInfo({
			description: "Su moza/o se aceraca a su mesa.",
			state: true,
			section: "callWaiter"
		})

	};

	const handleNotCall = () => {
		updateTableNumberNotCall(table.TableID)
		setSittingOnTheTableCall(false);
		setModalInfo({
			description: "Se ha cancelado el llamado.",
			state: true,
			section: "callWaiter"
		})
	};

	return (
		<>
			{
				sittingOnTheTableCall ?
					<CallWaiterView message={"Cancelar llamado moza/o a la maesa."} handleCallOrNotCall={handleNotCall} color={"red"} /> :
					<CallWaiterView message={"Llamar a moza/o a la mesa."} handleCallOrNotCall={handleCall} color={"green"} />
			}
		</>
	)

};