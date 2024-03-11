"use client"
import Image from 'next/image';
import { useItemsStore,useCategoriesStore, useSearchStore } from '@/store';
import brand from '@/images/brand.png'
import styles from './MainBrand.module.scss'



export const MainBrand = () => {

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
        <div className={styles.containerMainBrand}>
			<Image src={brand} alt={'brand'} className={styles.mainBrand } width={50} height={50} onClick={handleClickMenu}/>
		</div>
    )
}



