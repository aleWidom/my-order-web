
import { OrderProvider, TableProvider } from "@/context"
import { Navbar, MainHome, Footer } from "@/sections"
import { fetchTable } from "@/services"
/* import { ModalPlate, MainLoading, ModalPlateRequired, ModalInfo } from "@/components/molecules"; */

interface HomePageProps {
  searchParams: {
    table: string
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {


  const table = await fetchTable(searchParams?.table)
  /*   const { modalPlate } = useContext(OrderContext);
  
    const { modalInfo } = useContext(SearchContext) */

  /*   useFetchCarts() */


  return (
    <>
      <Navbar table={table} />
      <MainHome table={table} />


      {/*    {modalPlate.stateModal && modalPlate.modalType === 'main' && <ModalPlate buttonName='Agregar' />}
      {modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.stateOrder === 'temporary' && (
        <ModalPlateRequired />
      )}
      {modalInfo.state && <ModalInfo />} */}

    </>
  )
}
