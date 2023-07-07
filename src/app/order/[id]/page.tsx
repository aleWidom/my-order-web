
import { OrdersPlatesConfirmed } from "@/components/molecules/cards/OrdersPlatesConfirmed";
import { OrdersPlatesUnConfirmed } from "@/components/molecules/cards/OrdersPlatesUnconfirmed";
import { Navbar } from "@/sections";
import styles from './OrderPage.module.scss'

export default function OrderPage({ params }: any) {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainerOrder}>
        <OrdersPlatesUnConfirmed />
        <OrdersPlatesConfirmed />
      </div></>
  )
}
