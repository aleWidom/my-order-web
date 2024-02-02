import { create } from 'zustand'
import { TableRestaurant } from '../interfaces/interfaces';
import { fetchTable } from '@/services';

interface State {
  tableRestaurant: TableRestaurant,
  setTable: (idTable: string) => Promise<void>,
}

export const useTableStore = create<State>((set) => {
  return {
    tableRestaurant: {
      TableID: "",
      table_number: "",
      table_active: "",
      table_call: ""
    },

    setTable: async (idTable: string) => {
        const tableRestaurant = await fetchTable(idTable)
        set(state => ({
          ...state,
          tableRestaurant,
        }))
    }
  }
})


