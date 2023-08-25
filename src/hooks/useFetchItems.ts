"use client"
import { useEffect, useContext } from 'react';
import { OrderContext } from '../context/order/OrderContext';
import { fetchItemsRestaurant } from '../services';



export const useFetchItems = () => {
   
   const {setItemsRestaurant} =useContext(OrderContext)

//Busco todos los productos que hay en la base de datos y lo seteo como estado en la aplicación.
//TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
    
	useEffect(() => {   
        fetchItemsRestaurant()
        .then((data)=> {
            if(data) {
                setItemsRestaurant(data)
            }
        })
        .catch((err)=> {
            console.log(err)
        })
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
