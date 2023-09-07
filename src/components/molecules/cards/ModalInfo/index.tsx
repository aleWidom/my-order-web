"use client"
import { useContext } from 'react';
import { FaConciergeBell, FaStopCircle, FaTimes } from 'react-icons/fa';
import { SearchContext, TableContext } from '../../../../context';
import { ModalInfoView } from './ModalInfoView';


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
			{modalInfo.section === "form" &&
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
				</ModalInfoView>}
		</>
	)
}

