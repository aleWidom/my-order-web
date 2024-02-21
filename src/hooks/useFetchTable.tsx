"use client"
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { fetchTable, peopleInTable, peopleInTableFetch, updateTableNumberActive } from '@/services';
import { useTableStore } from '@/store';


export const useFetchTable = () => {

    const params = useSearchParams();

    const queryStringTable = params.get('table') || ""

    const setTable = useTableStore(state => state.setTable)

    const setIdPeopleInTable = useTableStore(state => state.setIdPeopleInTable)

    useEffect(() => {
        fetchTable(queryStringTable)
            .then((response) => {
                if (response !== undefined) {
                    if (response?.table_active === '0') {
                        console.log(response)
                        updateTableNumberActive(queryStringTable);

                        //Genero el idPeopleInTable
                        const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');

                        setIdPeopleInTable(idPeopleInTableUuid);

                        peopleInTable(idPeopleInTableUuid, queryStringTable);
                    }
                    else {
                        peopleInTableFetch(queryStringTable)
                            .then((data) => {
                                if (data !== undefined) {
                                    setIdPeopleInTable(data[0].PeopleInTableID)
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }

                    setTable({
                        TableID: response?.TableID,
                        table_number: response?.table_number,
                        table_active: response?.table_active,
                        table_call: response?.table_call,
                    })

                }
            })
            .catch((err) => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};