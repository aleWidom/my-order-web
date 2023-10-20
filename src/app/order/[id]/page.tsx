
"use client"
import { useContext } from "react";
import { OrderContext } from "@/context";
import { OrdersPlatesConfirmed } from "@/components/molecules/cards/OrdersPlatesConfirmed";
import { OrdersPlatesUnConfirmed } from "@/components/molecules/cards/OrdersPlatesUnconfirmed";
import { ModalPlate, ModalPlateRequired } from "@/components/molecules";
import { Navbar } from "@/sections";
import { useFetchCarts } from "@/hooks";
import styles from './OrderPage.module.scss'

export default function OrderPage({ params }: any) {

  const { modalPlate, cartTemporary, cartDefinitive } = useContext(OrderContext)

  useFetchCarts()
  
  return (
    <>
      <Navbar />
      <div className={styles.mainContainerOrder}>
        {cartTemporary?.length ?
          <>
            <OrdersPlatesUnConfirmed />

          </> : ''}
        {cartDefinitive?.length ?
          <OrdersPlatesConfirmed />
          : ''}
        {cartTemporary?.length === 0 && cartDefinitive?.length === 0 &&
          <div className={styles.withoutRequestContainer}>
            <p className={styles.emptyCart}>Sin solicitudes en su mesa.</p>
          </div>
        }
      </div>
      {modalPlate.stateModal && modalPlate.modalType === 'main' && modalPlate.stateOrder=== 'edit' && (
        <ModalPlate buttonName='Editar' />
      )}
      {modalPlate.stateModal && modalPlate.modalType === 'main' && modalPlate.stateOrder=== 'delete' && (
        <ModalPlate buttonName='Eliminar' />
      )}
      {modalPlate.stateModal && modalPlate.modalType === 'required' && (
        <ModalPlateRequired />
      )}
    </>
  )
}

