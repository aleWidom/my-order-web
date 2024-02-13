
"use client"
import { useItemsStore, useTableStore } from '@/store';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchTable, peopleInTable, peopleInTableFetch, updateTableNumberActive } from '@/services';
import styles from './Table.module.scss'

export const Table = () => {

    const table = useTableStore(state => state.tableRestaurant)

    const setTable = useTableStore(state => state.setTable)

    const setIdPeopleInTable = useTableStore(state => state.setIdPeopleInTable)

    const searchParams = useSearchParams()

    const idTable = searchParams.get('table')

    const setPlates = useItemsStore(state => state.setPlates)

    useEffect(() => {
        if (idTable !== null) {
            fetchTable(idTable)
                .then((response) => {
                    if (response !== undefined) {
                        if (response?.table_active === '0') {
                            updateTableNumberActive(idTable);
                            //Genero el idPeopleInTable
                            const idPeopleInTableUuid = uuidv4().replaceAll('/', '-')

                            setIdPeopleInTable(idPeopleInTableUuid);

                            peopleInTable(idPeopleInTableUuid, idTable);
                        }
                        else {
                            peopleInTableFetch(idTable)
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
        }
    }, [])


    useEffect(() => {
        setPlates("", "0")
    }, [])

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{table.table_number}</p>
        </div>

    )
}






