import { Quantity } from '@/components/molecules';
import Image from 'next/image';
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
				<Image src={`${source}`} alt={'plate'} width={100} height={100} className={styles.containerImg} priority />
				<h5 className={styles.title}>{header}</h5>
				<small className={styles.price}>$ {price}</small>
				<Quantity/>
		</div>
	);

}


