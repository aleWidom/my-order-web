"use client"
import { useContext } from 'react';
import { FaConciergeBell, FaStopCircle, FaTimes } from 'react-icons/fa';
import { SearchContext, TableContext } from '../../../../context';
/* import { ModalInfoView } from './ModalInfoView'; */


export const ModalInfo = () => {

	const { modalInfo, setModalInfo } = useContext(SearchContext);

	const { sittingOnTheTableCall } = useContext(TableContext);

	const closedModalInfo = () => {
		setModalInfo({
			state: false,
			description: '',
			section: '',
		});
	};

	return (
		<>
		{/* 	{modalInfo.section === "form" &&
				<ModalInfoView closedModalInfo={closedModalInfo} modalInfo={modalInfo}>
					<FaTimes style={{ fontSize: "30px", color: "red" }} />
				</ModalInfoView>}
			{modalInfo.section !== "form" && sittingOnTheTableCall === true &&
				<ModalInfoView  modalInfo={modalInfo}>
					<FaConciergeBell style={{ fontSize: "30px", color: "white" }} />
				</ModalInfoView>}
			{modalInfo.section !== "form" && sittingOnTheTableCall === false &&
				<ModalInfoView  modalInfo={modalInfo}>
					<FaTimes style={{ fontSize: "30px", color: "white" }} />
				</ModalInfoView>} */}
		</>
	)
}


/* import { ModalInfo } from '@/interfaces';
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
}; */



