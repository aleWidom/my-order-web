import { fetchTable } from "@/services";
import { Table } from "../icons/Table";


interface SearchTablerProps {
    tableID: string
}


export const SearchTable = async ({ tableID }: SearchTablerProps) => {

    const table = await fetchTable(tableID);

    return (
        <>
            {table !== undefined ? <Table table={table} /> : ""}
        </>
    );
};

