import { useContext } from "react"
import { TableContext } from "@/context"
import { TableView } from "./TableView"



export const Table = () => {
    
	const {table}= useContext(TableContext)
  
    return (
        <TableView numberTable={table.table_number}/>
    )
}