import { MainBrand, Table } from '@/components/atoms';
import styles from './Navbar.module.scss';

interface Props {
	children: React.ReactNode
}

export const NavbarView = ({children}: Props) => {
    return (
		<nav className={styles.containerNavbarHome}>
			<div className={styles.containerMenuBrand}>
				<MainBrand />
			</div>
			<div className={styles.containerTableWaiter}>
				<Table />
				{children}
			</div>
		</nav>
	); 
}
