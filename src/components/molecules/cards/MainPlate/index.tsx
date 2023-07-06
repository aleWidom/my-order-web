"use client"
import { useContext } from 'react';
import { OrderContext } from '../../../../context';
import { MainPlateView } from './MainPlateView';


interface Props {
	header: string,
	price: string,
	source: string,
	description: string,
	id: string
}


export const MainPlate = ({ header, price, source, description, id }: Props) => {

	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const onClickCardHome = () => {
		setModalPlate({
			...modalPlate,
			ItemID: id,
			stateModal: true,
			title: header,
			price: price,
			description: description,
			modalType: 'main',
		});
	};

	return (
		<MainPlateView onClickCardHome={onClickCardHome} header={header.length > 35 ? header.slice(0, 35) + '...' : header} source={source}/>
	);
};


