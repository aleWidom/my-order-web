"use client"
import { useContext } from 'react';
import Image from 'next/image';
import { OrderContext } from '../../../../context';
import styles from './MainPlate.module.scss'


interface Props {
	header: string,
	price: string,
	source: string,
	description: string,
	id: string,
}

export const MainPlate = ({ header, price, source, description, id }: Props) => {

/* 	const { modalPlate, setModalPlate } = useContext(OrderContext); */

	/* const onClickCardHome = () => {
		setModalPlate({
			...modalPlate,
			ItemID: id,
			stateModal: true,
			title: header,
			price: price,
			description: description,
			modalType: 'main',
		});
	}; */

	return (
		<div className={styles.container} /* onClick={onClickCardHome} */>
			<Image src={'/'} alt={'plate'}/>
{/* 			<div className={styles.containerImg} style={{ backgroundImage: `url(${source})` }}></div> */}
			<h5 className={styles.title}>{header}</h5>
		</div>
	);	

}


