"use client"
import { ChangeEvent, useState } from 'react';
import { Search } from '@/components/atoms';
import { InputSearch } from '@/components/molecules';
import { getItemsResults } from '@/services';
import { useCategoriesStore, useItemsStore, useSearchStore } from '@/store';
import styles from './FormSearch.module.scss';



export const FormSearch = () => {

	const [value, setValue] = useState("")

	const setQuery = useSearchStore(state => state.setQuery)

	const setModalInfo = useSearchStore(state => state.setModalInfo)

	const setPlates = useItemsStore(state => state.setPlates)

	const setSection = useItemsStore(state => state.setSection)

	const setCategorySelected = useCategoriesStore(state => state.setCategorySelected)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (value.length === 0) {
			setModalInfo({
				description: "Debe ingresar una palabra en su búsqueda",
				state: true,
				section: "form"
			})
		} else {
			getItemsResults(value, "0")
				.then((data) => {
					if (data) {
						if (data.length === 0) {
							setModalInfo({
								description: "No hay elementos que coincidan con la búsqueda.",
								state: true,
								section: "form"
							})
							setValue("");
						} else {
							setCategorySelected(
								{
									CategoryID: '0',
									name: '',
									photo: 'https://www.history.org.uk/library/1308/0000/0172/Exam_Results_image_chalk_board.jpg'
								}
							)

							setQuery(value)
							setPlates(value, "0", [])
							setValue("")
							setSection("")
						}
					}
				})
		}
	}

	return (
		<div className={styles.container}>
			<form className={styles.containerFormSearch} onSubmit={handleSubmit}>
				<InputSearch value={value} handleChange={handleChange} />
				<Search />
			</form>
		</div>
	);
};

