"use client"
import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';
import { fetchTable } from '../services';

export const useFetchCallTable = () => {   
    const { setSittingOnTheTableCall} = useContext(TableContext);

	useEffect(() => {  
        fetchTable(/* JSON.parse(localStorage.getItem('table') as any) */"2")
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


