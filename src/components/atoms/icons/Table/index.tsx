
"use client"
import { useItemsStore } from '@/store';
import { useEffect } from 'react';
import { TableRestaurant } from '@/interfaces';
import { useFetchTable } from '@/hooks';
import styles from './Table.module.scss'

interface TableProps {
    table: TableRestaurant
}

export const Table = ({ table }: TableProps) => {

    const setPlates = useItemsStore(state => state.setPlates)

    useEffect(() => {
        setPlates("", "0")
    }, [])

    useFetchTable(table)

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{table.table_number}</p>
        </div>

    )
}



