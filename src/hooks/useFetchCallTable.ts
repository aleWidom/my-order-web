"use client"
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchTable } from '../services';
import { useTableStore } from '@/store';


export const useFetchCallTable = () => {

    const setSittingOnTheTableCall = useTableStore(state => state.setSittingOnTheTableCall)

    const params = useSearchParams();

    useEffect(() => {
        if (params.get('table') !== null) {
            fetchTable(params.get('table'))
                .then((response) => {
                    if (response !== undefined) {
                        if (response?.table_call === '1') {
                            setSittingOnTheTableCall(true)
                        }
                        else {
                            setSittingOnTheTableCall(false)
                        }
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

