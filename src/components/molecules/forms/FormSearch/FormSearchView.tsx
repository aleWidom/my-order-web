import { Search } from '@/components/atoms';
import { InputSearch } from '@/components/molecules';
import styles from './FormSearch.module.scss';

export const FormSearchView = () => {
	return (
		<div className={styles.container}>
			<form className={styles.containerFormSearch}>
			 <InputSearch />
			 <Search /> 
			</form>
		</div>
	);
};
