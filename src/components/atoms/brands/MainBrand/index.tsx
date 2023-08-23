"use client"
import { useContext } from 'react';
import { usePathname} from 'next/navigation';
import { SearchContext } from '@/context';
import { MainBrandView } from './MainBrandView';

export const MainBrand = () => {

    const { setResults } = useContext(SearchContext);

    const  {tableID}= JSON.parse(localStorage.getItem('table') as string)

    const pathname  = usePathname();

    const page = pathname.slice(1, 6);

    const handleClickMenu = () => {
        setResults([]);
    };

    return (
        <MainBrandView handleClickMenu={handleClickMenu} page={page} tableID={tableID}/>
    )
}

