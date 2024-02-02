"use client"
import { FaAngleLeft } from 'react-icons/fa';
import { usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTableStore } from '@/store';
import brand from '@/images/brand.png'
import styles from './MainBrand.module.scss'


export const MainBrand = () => {

    const pathname  = usePathname();

    const page = pathname.slice(1, 6);

	const table = useTableStore(state => state.tableRestaurant)

    return (
        <Link href={`/?table=${table.TableID}&query=start&category=0`} className={styles.containerMainBrand}>
			{page !== 'order' ? (
				<Image src={brand} alt={'brand'} className={styles.mainBrand} width={50} height={50}/>
			) : (
				<div className={styles.iconOrder}>
					<FaAngleLeft />
				</div>
			)}
		</Link>
    )
}



