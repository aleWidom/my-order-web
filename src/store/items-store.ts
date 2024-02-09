import { PlateRestaurant } from '@/interfaces'
import { getItemsResults } from '@/services'
import { create } from 'zustand'


interface State {
    plates: PlateRestaurant[],
    setPlates: (query: string, categoryID: string) => Promise<void>,
    section: string,
    setSection: (section: string) => void,
}

export const useItemsStore = create<State>((set) => ({
    plates: [],
    
    setPlates: async (query: string, categoryID: string) => {
      const platesRestaurantSelected= await getItemsResults(query, categoryID)
      set(state=>({
        ...state,
         plates: platesRestaurantSelected
      })) 
    },
    
    section: "main",

    setSection: (section: string) => {
      set(state=>({
        ...state,
         section
      })) 
    },
}))
