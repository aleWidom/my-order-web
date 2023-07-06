"use client"
import { useContext } from 'react';
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
		<ModalInfoView closedModalInfo={closedModalInfo} modalInfo={modalInfo}/>
	);
};

/* {modalInfo.section === 'form' && (
	<button onClick={closedModalInfo} className={styles.buttonClosedModal}>
		<Closed />
	</button>
)}
{modalInfo.section !== 'form' && sittingOnTheTableCall === true && <FaConciergeBell className={styles.icon}/>}
{modalInfo.section !== 'form' && sittingOnTheTableCall === false && <FaRegStopCircle className={styles.icon}/>} */