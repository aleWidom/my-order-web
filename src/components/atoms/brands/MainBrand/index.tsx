"use client"
import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { SearchContext } from '@/context';
import { MainBrandView } from './MainBrandView';

export const MainBrand = () => {

    const { setResults } = useContext(SearchContext);

     const params = /* usePathname();  */ "/"

    const handleClickMenu = () => {
        setResults([]);
    };

    const pathname  = usePathname();

    const page = pathname.slice(1, 6);

    const numberTable =/*  JSON.parse(localStorage.getItem('table') as any) */ "2"

    return (
        <MainBrandView  params={params} handleClickMenu={handleClickMenu} page={page} numberTable={numberTable}/>
    )
}

