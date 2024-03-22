"use client"
import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsPersonCheckFill, BsPersonFillDash } from 'react-icons/bs'
import { useSearchStore } from '@/store'
import { ModalInfoInterface } from '@/interfaces'
import styles from './ModalInfo.module.scss'

interface ModalSearchProps {
	modalInfo: ModalInfoInterface
}

export const ModalInfo = ({ modalInfo }: ModalSearchProps) => {

	const setModalInfo = useSearchStore(state => state.setModalInfo)

	useEffect(() => {
		setTimeout(() => {
			setModalInfo({
				state: false,
				description: "",
				section: ""
			})
		}, 2250);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalInfo.state === true])

	return (
		<div className={styles.containerModalInfo}>
			<div className={styles.modalInfo}>
				{modalInfo.section === "form" || modalInfo.description === "Vuelva a realizar el llamado al mozo." ?
					<FaTimes style={{ fontSize: "30px", color: "red" }} /> :
					modalInfo.description === "Su moza/o se aceraca a su mesa." ? <BsPersonCheckFill style={{ fontSize: "30px", color: "white" }} /> : <BsPersonFillDash style={{ fontSize: "30px", color: "white" }} />
				}
				<p className={styles.description}>{modalInfo.description}</p>
			</div>
		</div>

	)
}


