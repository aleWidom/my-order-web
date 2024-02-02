
import {MainBrand , Table } from '@/components/atoms';
import styles from './Navbar.module.scss';

export const Navbar = async () => {
	return (
		<nav className={styles.containerNavbarHome}>
			<div className={styles.containerMenuBrand}>
				<MainBrand />
			</div>
			<div className={styles.containerTableWaiter}>
				<Table  />
			</div>
		</nav>
	);
}




