import { Quantity } from '@/components/molecules';
import Image from 'next/image';
import styles from './MainPlate.module.scss'

interface Props {
	title: string,
	price: string,
	source: string,
	description: string,
	idItem: string,
}

export const MainPlate = ({ title, price, source, idItem }: Props) => {
	return (
		<div className={styles.container}>
				<Image src={`${source}`} alt={'plate'} width={100} height={100} className={styles.containerImg} priority />
				<h5 className={styles.title}>{title}</h5>
				<small className={styles.price}>$ {price}</small>
				<Quantity price={price} title={title} idItem={idItem}/>
		</div>
	);

}


