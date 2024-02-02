import { PlateRestaurant } from '@/interfaces'
import { getItemsResults } from '@/services'
import { create } from 'zustand'


interface State {
    orders: PlateRestaurant[],
    setOrders: (plate: PlateRestaurant) => Promise<void>,
}

export const useOrdersStore = create<State>((set) => ({
    orders: [],
    
    setOrders: async (plate: PlateRestaurant) => {
    /*   const platesRestaurantSelected= await getItemsResults(plate)
      set(state=>({
        ...state,
         plates: platesRestaurantSelected
      }))  */
    }
}))
