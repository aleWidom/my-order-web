import { PlateRestaurant } from '@/interfaces'
import { getItemsResults } from '@/services'
import { create } from 'zustand'


interface State {
  plates: PlateRestaurant[],
  setPlates: (query: string, categoryID: string, data: PlateRestaurant[]) => Promise<void>,
  section: string,
  setSection: (section: string) => void,
}

export const useItemsStore = create<State>((set) => ({
  plates: [],

  setPlates: async (query: string, categoryID: string, data) => {
    if (data.length === 0) {
      const platesRestaurantSelected = await getItemsResults(query, categoryID)
      set(state => ({
        ...state,
        plates: platesRestaurantSelected
      }))
    }
    else {
      set(state => ({
        ...state,
        plates: data
      }))
    }
  },

  section: "main",

  setSection: (section: string) => {
    set(state => ({
      ...state,
      section
    }))
  },
}))
