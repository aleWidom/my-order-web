import { create } from 'zustand'
import { TableRestaurant } from '../interfaces/interfaces';
import { fetchTable } from '@/services';

interface State {
  tableRestaurant: TableRestaurant,
  setTable: (table: TableRestaurant) => void,
  sittingOnTheTableCall: boolean,
  setSittingOnTheTableCall: (condition: boolean) => void,
  idPeopleInTable: string,
  setIdPeopleInTable: (idPeople: string) => void
}

export const useTableStore = create<State>((set) => {
  return {
    tableRestaurant: {
      TableID: "",
      table_number: "",
      table_active: "",
      table_call: ""
    },

    setTable: async (table: TableRestaurant) => {
      set(state => ({
        ...state,
        tableRestaurant: table
      }))
    },

    sittingOnTheTableCall: false,

    setSittingOnTheTableCall: (condition: boolean) => {
      set(state => ({
        ...state,
        sittingOnTheTableCall: condition
      }))
    },

    idPeopleInTable: "",

    setIdPeopleInTable: (idPeople: string) => {
      set(state => ({
        ...state,
        idPeopleInTable: idPeople
      }))
    }


  }
})


