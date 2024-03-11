"use client"
import { useEffect } from 'react';
import { useTableStore } from '@/store';
import { TableRestaurant } from '@/interfaces';

export const useFetchCallTable = (table: TableRestaurant) => {

    const setSittingOnTheTableCall = useTableStore(state => state.setSittingOnTheTableCall)

    if (table.table_call === '1') {
        setSittingOnTheTableCall(true)
    }
    else if (table.table_call === '0') {
        setSittingOnTheTableCall(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

};

