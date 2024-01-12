'use client'
import { useLayoutEffect, useState } from 'react';
import { TableRestaurant } from '@/interfaces';
import styles from './CallWaiter.module.scss';

interface CallWaiterProps {
	message: string,
	color: string;
	table: TableRestaurant | undefined;
}

export const CallWaiter = ({ message, color, table }: CallWaiterProps) => {

	useLayoutEffect(() => {
		if(table !== undefined) {
			if(table?.table_call === '1') {
				setSittingOnTheTableCall(true)
			   }
			   else {
				setSittingOnTheTableCall(false)
			   }
		   }
	}, [table])


	const [sittingOnTheTableCall, setSittingOnTheTableCall] = useState<boolean>(false);

	

	const handleCall = () => {
		/* 		setModalInfo({
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
				}, 3000); */

		/* 		updateTableNumberCall(table.TableID); */
		console.log('call')
		setSittingOnTheTableCall(true);

	};

	const handleNotCall = () => {
		/* 		setModalInfo({
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
				}, 3000); */

		/* 		updateTableNumberNotCall(table.TableID); */
		console.log('notcall')
		setSittingOnTheTableCall(false);
	};

	return (
		<div className={styles.containerCallWaiter}>
			<button className={`${styles.button} ${styles[color]}`} /* onClick={handleCallOrNotCall} */>
				{message}
			</button>
		</div>
	);
}


/* 			{sittingOnTheTableCall ? 
		<CallWaiter message={'Cancelar llamado moza/o a la maesa.'} handleCallOrNotCall={handleNotCall} color="green"/> { :
	<CallWaiter message={'Llamar a moza/o a la mesa.'} handleCallOrNotCall={handleCall} color="red"/>} } */


