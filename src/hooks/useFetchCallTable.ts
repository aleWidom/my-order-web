"use client"
import { useEffect, useContext } from 'react';
import { useSearchParams } from 'next/navigation';
import { TableContext } from '../context/tables/TableContext';
import { fetchTable } from '../services';

export const useFetchCallTable = () => {   
    const { setSittingOnTheTableCall} = useContext(TableContext);

    const params = useSearchParams();

	useEffect(() => {  
        fetchTable(params.get('table'))
        .then((response)=> {
           if(response?.table_call === '1') {
            setSittingOnTheTableCall(true)
           }
           else {
            setSittingOnTheTableCall(false)
           }
        })
        .catch((err)=> {
            console.log(err)
        })
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};


