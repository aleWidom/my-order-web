
"use client"
import { useTableStore } from '@/store';
import styles from './Table.module.scss'
import { useLayoutEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const Table = () => {

    const table = useTableStore(state => state.tableRestaurant)

	const setTable = useTableStore(state => state.setTable)

    const searchParams = useSearchParams()

    const idTable = searchParams.get('table')

	useLayoutEffect(() => {
	  if(idTable !== null) {
        setTable(idTable)
      }
	}, [])

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{table.table_number}</p>
        </div>

    )
}


