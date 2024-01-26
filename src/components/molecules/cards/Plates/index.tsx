'use client'
import {useLayoutEffect, useState } from "react"
import { MainPlates, MenuPlates } from "@/components/molecules"
import { PlateRestaurant } from "@/interfaces"

interface PlatesRestauranteProps {
    results: PlateRestaurant[]
}


export const Plates = ({results}: PlatesRestauranteProps) => {

  const [results2, setResults]= useState(results)

 
  

  console.log(results2)

  return (
    <>
    {results2 ? <MainPlates/> : <MenuPlates results2={results2} /* results={results} */ /* categorySelected={categorySelected}  *//>}
    </>
  )
}

