import { Quantity } from '@/components/molecules';
import Image from 'next/image';
import styles from './MainPlate.module.scss'


interface Props {
	title: string,
	price: string,
	source: string,
	description: string,
	idItem: string,
	tableNumber: string | undefined
}

export const MainPlate = ({ title, price, source, tableNumber, idItem }: Props) => {

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
				<Image src={`${source}`} alt={'plate'} width={100} height={100} className={styles.containerImg} priority />
				<h5 className={styles.title}>{title}</h5>
				<small className={styles.price}>$ {price}</small>
				<Quantity tableNumber={tableNumber} price={price} title={title} idItem={idItem}/>
		</div>
	);

}


