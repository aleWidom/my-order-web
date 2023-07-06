import { useContext } from 'react';
import { SearchContext } from '@/context';
import { CallWaiter, Categories, FormSearchView as FormSearch, MainPlates, MenuPlates /* Plates */ } from '@/components/molecules';
import styles from './MainHome.module.scss'


export const MainHome = () => {

	const { results } = useContext(SearchContext);

	return (
		<>
			<div className={styles.mainContainerHome}>
				<CallWaiter />
				<FormSearch />
				<Categories />
				{results.length === 0 ? <MainPlates /> : <MenuPlates />}
			</div>
		</>
	)
}

