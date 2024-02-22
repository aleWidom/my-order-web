
import { MainBrand, SearchTable } from '@/components/atoms';
import styles from './Navbar.module.scss';
import { Suspense } from 'react';

interface NavbarProps {
	tableID: string
}

export const Navbar = async ({ tableID }: NavbarProps) => {
	return (
		<nav className={styles.containerNavbarHome}>
			<div className={styles.containerMenuBrand}>
				<MainBrand />
			</div>
			<div className={styles.containerTableWaiter}>
				<Suspense fallback={"Cargando"}>
					<SearchTable tableID={tableID} />
				</Suspense>
			</div>
		</nav>
	);
}




