"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useItemsStore, useTableStore, useCategoriesStore, useSearchStore } from '@/store';
import brand from '@/images/brand.png'
import styles from './MainBrand.module.scss'



export const MainBrand = () => {

	const table = useTableStore(state => state.tableRestaurant)

    const setPlates = useItemsStore(state => state.setPlates)

    const setSection= useItemsStore(state => state.setSection)

    const setCategorySelected = useCategoriesStore(state => state.setCategorySelected)

    const setQuery = useSearchStore(state=> state.setQuery)

    const handleClickMenu = () => {
        setCategorySelected(
			{
				CategoryID: '',
				name: '',
				photo: ''
			  }
		)
		setPlates("", "0")
        setQuery("")
        setSection("main")
    };

    return (
        <Link href={`/?table=${table.TableID}`} className={styles.containerMainBrand} onClick={handleClickMenu}>
			<Image src={brand} alt={'brand'} className={styles.mainBrand} width={50} height={50}/>
		</Link>
    )
}



