import { Order } from '@/interfaces'
import { create } from 'zustand'


interface State {
    orders: Order[],
    setOrders: (orders: Order[]) => void,
    request: boolean,
    setRequest: (condition:boolean) => void,
    messageRequest: string,
    setMessageRequest: (message: string) => void
}

export const useOrdersStore = create<State>((set) => ({
    orders: [],
    setOrders: (orders: Order[]) => {
      set(state=>({
        ...state,
         orders
      }))  
    },
    request: false,
    setRequest: (condition:boolean) => {
      set(state=>({
        ...state,
         request: condition
      }))  
    },
    messageRequest: "",
    setMessageRequest: (message:string) => {
      set(state=>({
        ...state,
         messageRequest: message
      }))  
    }
   
}))


 