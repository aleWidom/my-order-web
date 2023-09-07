import { ModalInfo } from '@/interfaces';
import styles from './ModalInfo.module.scss';

interface Props {
	closedModalInfo?: () => void;
	modalInfo: ModalInfo;
	children: React.ReactNode
}

export const ModalInfoView = ({ closedModalInfo, modalInfo, children }: Props) => {

	return (
		<>
			<div className={styles.containerModalInfo} onClick={closedModalInfo}></div>
			<div className={styles.modalInfo}>
				{children}
				<p className={styles.description}>{modalInfo.description}</p>
			</div>
		</>
	);
};



