import { ClosedView as Closed, IconButton } from '@/components/atoms';
import { Quantity } from '@/components/molecules';
import { ModalPlate } from '@/interfaces';
import styles from './ModalPlate.module.scss'

interface Props {
    modalPlate: ModalPlate;
    buttonName: string;
    closedModalPlate: () => void;
}

export const ModalPlateView = ({ closedModalPlate, modalPlate, buttonName }: Props) => {
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
                {buttonName !== "Eliminar" &&
                    <div className={styles.containerQuantity}>
                        <p className={styles.quantity}>Cantidad: </p>
                        <Quantity />
                    </div>
                }

                <IconButton buttonName={buttonName} />
            </div>
        </>
    );
};
