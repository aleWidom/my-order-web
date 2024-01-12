"use client"
import { useContext } from 'react';
/* import { ModalPlateView } from './ModalPlateView'; */
import { OrderContext } from '@/context';

interface Props {
	buttonName: string;
}

export const ModalPlate = ({ buttonName }: Props) => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const closedModalPlate = () => {
		setModalPlate({
			ItemID: '',
			title: '',
			description: '',
			price: '0',
			quantity: 1,
			stateModal: false,
		});
	};

	return (
		{/* <ModalPlateView closedModalPlate={closedModalPlate} buttonName={buttonName}
			modalPlate={{
				...modalPlate,
				title: modalPlate.title.length > 38 ? modalPlate.title.slice(0, 38) + "..." : modalPlate.title,
				description: modalPlate.description.length > 45 ? modalPlate.description.slice(0, 45) + "..." : modalPlate.description
			}
			}
		/> */}
	);
};


