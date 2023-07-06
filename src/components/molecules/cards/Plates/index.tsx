"use client"  
import { useContext } from "react";
import { SearchContext } from "@/context"; 
import { MainPlates, MenuPlates } from "@/components/molecules"


export const Plates = () => {
  
 const { results } = useContext(SearchContext); 

    return (
       <>
        {results.length === 0 ? "<MainPlates />" : "<MenuPlates />"}
        </>
  )
}
 