"use client"
import { useContext } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { usePathname} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SearchContext, TableContext } from '@/context';
import brand from '@/images/brand.png'
import styles from './MainBrand.module.scss'


interface MainbrandProps {
    tableID: string | undefined
}


export const MainBrand = ({tableID}:MainbrandProps) => {

    /* const { table } = useContext(TableContext); */

    const { setResults } = useContext(SearchContext);

    const pathname  = usePathname();

    const page = pathname.slice(1, 6);

    const handleClickMenu = () => {
        setResults([]);
    };

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
    )
}

