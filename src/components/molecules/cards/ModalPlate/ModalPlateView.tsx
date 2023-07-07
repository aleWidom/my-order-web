import { ClosedView as Closed } from '@/components/atoms';
import { ModalPlate } from '@/interfaces';
import styles from './ModalPlate.module.scss'

interface Props {
    modalPlate: ModalPlate
    closedModalPlate: () => void;
}

export const ModalPlateView = ({ closedModalPlate, modalPlate }: Props) => {
    return (
        <>
            <div className={styles.containerModalPlate} onClick={closedModalPlate}></div>
            <div className={styles.modalPlate}>
                <button onClick={closedModalPlate} className={styles.buttonClosedModal}>
                    <Closed />
                </button>
                <h2 className={styles.title}>{modalPlate.title}</h2>
                <p className={styles.description}>{modalPlate.description}</p>
                <p className={styles.price}>${modalPlate.price}</p>
                <small className={styles.priceUnit}> (precio x unidad)</small>
            </div>
        </>
    );
};
