
import { MainBrand, Table } from '@/components/atoms';
import styles from './Navbar.module.scss';
import { Suspense } from 'react';
import { TableRestaurant } from '@/interfaces';

interface NavbarProps {
	table: TableRestaurant
}

export const Navbar = async ({ table }: NavbarProps) => {

	return (
		<nav className={styles.containerNavbarHome}>
			<div className={styles.containerMenuBrand}>
				<MainBrand />
			</div>
			<div className={styles.containerTableWaiter}>
				<Suspense fallback={"Cargando"}>
					<Table table={table} />
				</Suspense>
			</div>
		</nav>
	);
}




