'use client'
import { useRouter} from "next/navigation";
import { Search } from '@/components/atoms';
import { InputSearch } from '@/components/molecules';
import styles from './FormSearch.module.scss';


interface FormSearchProps {
	tableID: string | undefined,
}

export const FormSearch = ({ tableID }: FormSearchProps) => {

	const router = useRouter();

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// Prevenimos que la página se refresque al enviar el formulario
		event.preventDefault();
		// Obtenemos el valor del input
		const query: string = event.currentTarget.query.value;

		// Redireccionamos al index con una query
		router.push(`?table=${tableID}&query=${query}&category=0`);          
		
		event.currentTarget.query.value = ""
	};

	return (
		<div className={styles.container}>
			<form className={styles.containerFormSearch} onSubmit={handleSubmit}>
				<InputSearch />
				<Search />
			</form>
		</div>
	);
};

