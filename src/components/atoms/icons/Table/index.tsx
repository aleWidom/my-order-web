
"use client"
import { TableRestaurant } from '@/interfaces';
import { useFetchTable } from '@/hooks';
import styles from './Table.module.scss'

interface TableProps {
    table: TableRestaurant
}

export const Table = ({ table }: TableProps) => {

    useFetchTable(table)

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{table.table_number}</p>
        </div>

    )
}



