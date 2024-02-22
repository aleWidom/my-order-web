'use client'
import { MainPlates, MenuPlates } from "@/components/molecules"
import { useItemsStore } from "@/store"




export const Plates = () => {


  const plates = useItemsStore(state => state.plates)

  const section = useItemsStore(state => state.section)


  return (
    <>
      {section === "main" ? <MainPlates plates={plates} /> : <MenuPlates plates={plates} />}
    </>
  )
}

