'use client'
import { MainPlates, MenuPlates } from "@/components/molecules"
import { PlateRestaurant } from "@/interfaces"
import { useItemsStore } from "@/store"
import { useEffect } from "react"

interface PlatesProps {
  dataPlates: PlateRestaurant[]
}


export const Plates = ({ dataPlates }: PlatesProps) => {


  const section = useItemsStore(state => state.section)

  const plates = useItemsStore(state => state.plates)

  const setPlates = useItemsStore(state => state.setPlates)

  useEffect(() => {
    setPlates("", "0", dataPlates)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {section === "main" ? <MainPlates plates={plates} /> : <MenuPlates plates={plates} />}
    </>
  )
}