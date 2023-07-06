import styles from './MainPlate.module.scss';

interface Props {
	header: string;
	source: string;
	onClickCardHome: () => void
}

export const MainPlateView = ({ header , source, onClickCardHome }: Props) => {
	return (
		<div className={styles.container} onClick={onClickCardHome}>
			<div className={styles.containerImg} style={{ backgroundImage: `url(${source})` }}></div>
			<h5 className={styles.title}>{header}</h5>
		</div>
	);
};
