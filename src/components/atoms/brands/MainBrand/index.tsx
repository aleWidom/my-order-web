"use client"
import { useContext } from 'react';
import { usePathname} from 'next/navigation';
import { SearchContext, TableContext } from '@/context';
import { MainBrandView } from './MainBrandView';

export const MainBrand = () => {

    const { table } = useContext(TableContext);

    const { setResults } = useContext(SearchContext);

    console.log(table)


    const pathname  = usePathname();

    const page = pathname.slice(1, 6);

    const handleClickMenu = () => {
        setResults([]);
    };

    return (
        <MainBrandView handleClickMenu={handleClickMenu} page={page} tableID={table.TableID}/>
    )
}

