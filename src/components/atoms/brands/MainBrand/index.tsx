"use client"
import { useContext } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SearchContext } from '@/context';
import brand from '@/images/brand.png'
import styles from './MainBrand.module.scss'


interface MainbrandProps {
    tableID: string | undefined
}

export const MainBrand = ({tableID}:MainbrandProps) => {

    const pathname  = usePathname();

    const page = pathname.slice(1, 6);

    return (
        <Link href={`/?table=${tableID}&query=start&category=0`} className={styles.containerMainBrand}>
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



