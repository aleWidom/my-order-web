"use client"
import { useEffect } from 'react';
import { useSearchStore, useTableStore } from '@/store';
import { TableRestaurant } from '@/interfaces';
import { fetchTableActiveCall } from '@/services';

export const useFetchCallTable = (table: TableRestaurant) => {

    const setSittingOnTheTableCall = useTableStore(state => state.setSittingOnTheTableCall)

    const setModalInfo = useSearchStore(state => state.setModalInfo)

    useEffect(() => {
        const fetchDataAndSetTimeout = () => {
            fetchTableActiveCall(table.TableID)
                .then((response) => {
                    if (response !== undefined) {
                        if (response.table_call === '1') {
                            setSittingOnTheTableCall(true)
                        }
                        else if (response.table_call === '0') {
                            setSittingOnTheTableCall(false)
                        }
                    }
                })
                .catch((err) => {
                    console.log(err)
                    setModalInfo({
                        state: true,
                        description: "Vuelva a realizar el llamado al mozo.",
                        section: "callWaiter"
                    })

                })
                .finally(() => {
                    setTimeout(fetchDataAndSetTimeout, 1000);
                })
        }

        fetchDataAndSetTimeout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

