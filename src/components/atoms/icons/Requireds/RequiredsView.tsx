
"use client"
import Link from 'next/link';
import { FaBell } from 'react-icons/fa';
import styles from './Requireds.module.scss'

interface Props {
	tableID: string
}


export const RequiredsView = ({tableID}:Props) => {
return (
		<div className={styles.required}>
						<Link href={`/order/${tableID}`} className={styles.link}>
							<FaBell />
						</Link>
		</div>
	); 
};

