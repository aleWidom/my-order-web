import { ModalPlate } from '@/interfaces';
import styles from './QuantityView.module.scss'

interface Props {
    modalPlate: ModalPlate;
    substract: any;
    add: any
}

export const QuantityView = ({ modalPlate, substract, add }: Props) => {
    return (
        <div className={styles.containerQuantitySigns}>
            <button onClick={substract.operation} className={styles.buttonQuantity}>
                <p className={styles.containerSign}>
                    <small style={substract.styleSign}>-</small>
                </p>
            </button>
            <p className={styles.quantitySelected}>{modalPlate.quantity}</p>
            <button onClick={add.operation} className={styles.buttonQuantity}>
                <p className={styles.containerSign}>
                    <small style={add.styleSign}>+</small>
                </p>
            </button>
        </div>
    )
}


