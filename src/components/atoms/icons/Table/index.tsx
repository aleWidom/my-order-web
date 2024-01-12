
import styles from './Table.module.scss'

interface TableProps {
    tableNumber: string | undefined
}

export const Table = ({tableNumber}:TableProps) => { 
  
    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{`${tableNumber}`}</p>
        </div>

    )
}


	