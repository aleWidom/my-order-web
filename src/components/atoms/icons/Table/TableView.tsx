import styles from './Table.module.scss'

interface Props {
    numberTable: string | undefined
}

export const TableView = ({numberTable}:Props) => {
    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{`${numberTable}` } </p>
        </div>
    )
}


