"use client"
import { useContext, useEffect } from 'react';
import { OrderContext } from '../context';
import { fetchItemPeopleInTable } from '../services';

export const useFetchCarts = () => {
	const { setCartTemporary, setCartDefinitive } = useContext(OrderContext);

	useEffect(() => {
		//si existe localStorage.getItem('cartTemporary') seteo el cartTemporary con el valor que trae, sino creo el local storage con dicho nombre y seteo un array vacio
		if (localStorage.getItem('cartTemporary')) {
			setCartTemporary(JSON.parse(localStorage.getItem('cartTemporary') as any));
		} else {
			localStorage.setItem('cartTemporary', JSON.stringify([]));
			setCartTemporary([]);
		}

		//realizo la búesqueda si existe en el localStorage cartDefinitive
		if (localStorage.getItem('cartDefinitive')) {
			//si el localStorage existe pero está vacío, busco de la base de datos y seteo
			if (localStorage.getItem('cartDefinitive') === '[]') {
				fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
					.then((response) => {
						//si la respuesta es vacia seteoCartDefinitive y el local storage con array vacio, si obtengo una respuesta seteo la respuesta.
						if (response === '') {
							setCartDefinitive([]);
							localStorage.setItem('cartDefinitive', JSON.stringify([]));
						} else {
							setCartDefinitive(response);
							localStorage.setItem('cartDefinitive', JSON.stringify(response));
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}
			//si existe y el array no es vacío lo seteo del localStorage
			else {
				setCartDefinitive(JSON.parse(localStorage.getItem('cartDefinitive') as any));
			}
		}

		//Sino existe en el localStorage cartDefinitive
		else {
			fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
				.then((response) => {
					//si la respuesta es vacia seteoCartDefinitive y el local storage con array vacio, si obtengo una respuesta seteo la respuesta.
					if (response === '') {
						setCartDefinitive([]);
						localStorage.setItem('cartDefinitive', JSON.stringify([]));
					} else {
						if (response !== undefined) {
							setCartDefinitive(response);
							localStorage.setItem('cartDefinitive', JSON.stringify(response));
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
