import { CallWaiter } from "@/components/molecules";
import { fetchTable } from "@/services";

interface SearchCallsProps {
    tableID: string
}

export const SearchCalls = async ({ tableID }: SearchCallsProps) => {

    const table = await fetchTable(tableID)

    return (
        <>
            {table !== undefined && <CallWaiter table={table} />}
        </>
    );
};

