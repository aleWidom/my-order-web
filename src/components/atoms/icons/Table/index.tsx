
"use client"
import { useItemsStore, useTableStore } from '@/store';
import { useEffect } from 'react';
import styles from './Table.module.scss'

export const Table = () => {

    const table = useTableStore(state => state.tableRestaurant)

    const setPlates = useItemsStore(state => state.setPlates)

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






