import { CategoryRestaurant } from '@/interfaces'
import { create } from 'zustand'

interface State {

  categorySelected: CategoryRestaurant,
  setCategorySelected: (categorySelected: CategoryRestaurant) => void
}

export const useCategoriesStore = create<State>((set) => ({
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


