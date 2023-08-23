import { TableView } from "./TableView"



export const Table = () => {
    
	const  {tableNumber}= JSON.parse(localStorage.getItem('table') as string)
  
    return (
        <TableView numberTable={tableNumber}/>
    )
}