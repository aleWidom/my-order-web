import { CategoryRestaurant } from '@/interfaces'
import { getAllCategoriesIdRestaurant1 } from '@/services'
import { create } from 'zustand'

interface State {
  categories: CategoryRestaurant[],
  setCategories: () => Promise<void>
  categorySelected: CategoryRestaurant,
  setCategorySelected: (categorySelected: CategoryRestaurant) => void
}

export const useCategoriesStore = create<State>((set) => ({
  categories: [],

  setCategories: async () => {
    const categoriesMenuRestaurant = await getAllCategoriesIdRestaurant1()
    set(state => ({
      ...state,
      categories: categoriesMenuRestaurant,
    }))
  },

  categorySelected: {
    CategoryID: "",
    name: "",
    photo: ""
  },

  setCategorySelected: (categorySelected: CategoryRestaurant) => {
    set(state => ({
      ...state,
      categorySelected
    }))
  },
}))


