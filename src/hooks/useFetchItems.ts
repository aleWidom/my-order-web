"use client"
import { useEffect, useContext } from 'react';
import { OrderContext } from '../context/order/OrderContext';
import { fetchItemsRestaurant } from '../services';



export const useFetchItems = () => {
   
   const {setItemsRestaurant} =useContext(OrderContext)
    
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
