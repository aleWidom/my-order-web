import { ChangeEvent, useState } from 'react';
import { Search } from '@/components/atoms';
import { InputSearch } from '@/components/molecules';
import { useSearchStore } from '@/store/search-store';
import styles from './FormSearch.module.scss';
import { useItemsStore } from '@/store';



export const FormSearch = () => {

	const [value, setValue] = useState("")

	const setQuery = useSearchStore(state=> state.setQuery)

	const setPlates = useItemsStore(state => state.setPlates) 

	const query = useSearchStore(state=> state.query)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	  }
	

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setQuery(value)
		setPlates(value, "0")
		setValue("")
	};

	return (
		<div className={styles.container}>
			<form className={styles.containerFormSearch} onSubmit={handleSubmit}>
				<InputSearch value={value} handleChange={handleChange} />
				<Search />
			</form>
		</div>
	);
};

