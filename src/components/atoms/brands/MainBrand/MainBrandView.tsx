
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleLeft } from 'react-icons/fa';
import brand from '@/images/brand.png';
import styles from './MainBrand.module.scss';

interface Props {
	tableID: string, 
	page: string, 
	handleClickMenu: () => void
}


export const MainBrandView = ({tableID, page, handleClickMenu}: Props) => {
	return (
		<Link href={`/?table=${tableID}`} className={styles.containerMainBrand} onClick={handleClickMenu}>
			{page !== 'order' ? (
				<Image src={brand} alt={'brand'} className={styles.mainBrand} width={50} height={50}/>
			) : (
				<div className={styles.iconOrder}>
					<FaAngleLeft />
				</div>
			)}
		</Link>
	);
};
