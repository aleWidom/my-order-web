
import { MainBrand, Table } from '@/components/atoms';
import styles from './Navbar.module.scss';
import { TableRestaurant } from '@/interfaces';


interface NavbarProps {
	table: TableRestaurant | undefined
}

export const Navbar = async ({ table }: NavbarProps) => {
	return (
		<nav className={styles.containerNavbarHome}>
			<div className={styles.containerMenuBrand}>
				<MainBrand tableID={table?.TableID} />
			</div>
			<div className={styles.containerTableWaiter}>
				<Table tableNumber={table?.table_number} />
			</div>
		</nav>
	);
}




