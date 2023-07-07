import { ModalInfo } from '@/interfaces';
import { ClosedView as Closed } from '@/components/atoms';
import styles from './ModalInfo.module.scss';

interface Props {
	closedModalInfo: () => void;
	modalInfo: ModalInfo
}

export const ModalInfoView = ({ closedModalInfo, modalInfo }: Props) => {

	return (
		<>
			<div className={styles.containerModalInfo} onClick={closedModalInfo}></div>
			<button onClick={closedModalInfo} className={styles.buttonClosedModal}>
				<Closed />
			</button>
			<div className={styles.modalInfo}>
				<p className={styles.description}>{modalInfo.description}</p>
			</div>
		</>
	);
};
