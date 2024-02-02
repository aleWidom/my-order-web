import { create } from 'zustand'
import { TableRestaurant } from '../interfaces/interfaces';
import { fetchTable } from '@/services';

interface State {
  query: string,
  setQuery: (value: string) => void
}

export const useSearchStore = create<State>((set) => ({
  query: "",
  setQuery: (value: string) => {
    set(state => ({
      ...state,
      query: value
    }))
  },

}))
