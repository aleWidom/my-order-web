import Link from 'next/link';
import { FaBell } from 'react-icons/fa';
import styles from './Requireds.module.scss'



export const RequiredsView = () => {
	return (
		<div className={styles.required}>
						<Link href={/* `/order/${params.get('table')}` */"/"} className={styles.link}>
							<FaBell />
						</Link>
		</div>
	); 
};


