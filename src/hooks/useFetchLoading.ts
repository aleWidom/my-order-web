"use client"
import { useContext, useEffect } from 'react';
import { OrderContext} from '../context';


export const useFetchLoading = () => {

    const {setLoading, itemsRestaurant, cardsDayPlates, cardsRankingPlates, cardsSpecialsCheff, categoriesMenuRestaurant }= useContext(OrderContext)

    useEffect(()=> {

            if(itemsRestaurant.length && categoriesMenuRestaurant.length && cardsDayPlates.length && cardsRankingPlates.length && cardsSpecialsCheff.length) {
                setLoading(false)
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [itemsRestaurant, cardsDayPlates, cardsRankingPlates, cardsSpecialsCheff, categoriesMenuRestaurant])
};


