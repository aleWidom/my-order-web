import { Plates } from "@/components/molecules";
import { getItemsResults } from "@/services";

export const SearchPlates = async () => {


    const dataPlates = await getItemsResults("", "0")

    return (
        <Plates dataPlates={dataPlates} />
    );
};

