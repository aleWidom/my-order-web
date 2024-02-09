import {ModalInfoInterface } from '@/interfaces'
import { create } from 'zustand'

interface State {
  query: string,
  setQuery: (value: string) => void,
  modalInfo: ModalInfoInterface,
 setModalInfo: (objectInfo: ModalInfoInterface) => void, 
}

export const useSearchStore = create<State>((set) => ({
  query: "",

  setQuery: (value: string) => {
    set(state => ({
      ...state,
      query: value
    }))
  },
  modalInfo: {
    description: "",
    state: false,
    section: ""
  },

  setModalInfo: (objectInfo: ModalInfoInterface) => {
    set(state => ({
      ...state,
      modalInfo: objectInfo
    }))
  }

}))


