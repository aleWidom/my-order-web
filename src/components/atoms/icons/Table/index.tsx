import { TableView } from "./TableView"



export const Table = () => {

	const  numberTable =/*  JSON.parse(localStorage.getItem('table') as any) */ "2"

    return (
        <TableView numberTable={numberTable}/>
    )
}