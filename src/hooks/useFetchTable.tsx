"use client"
import { v4 as uuidv4 } from 'uuid';
import { peopleInTable, peopleInTableFetch, updateTableNumberActive } from '@/services';
import { TableRestaurant } from '@/interfaces';
import { useTableStore } from '@/store';



export const useFetchTable = (table: TableRestaurant) => {

    const setTable = useTableStore(state => state.setTable)

    const setIdPeopleInTable = useTableStore(state => state.setIdPeopleInTable)


    if (table.table_active === '0') {

        updateTableNumberActive(table.TableID);

        //Genero el idPeopleInTable
        const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');

        setIdPeopleInTable(idPeopleInTableUuid);

        peopleInTable(idPeopleInTableUuid, table.TableID);
    }
    else if (table.table_active === '1') {
        peopleInTableFetch(table.TableID)
            .then((data) => {
                if (data !== undefined) {
                    setIdPeopleInTable(data[0].PeopleInTableID)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    setTable({
        TableID: table?.TableID,
        table_number: table?.table_number,
        table_active: table?.table_active,
        table_call: table?.table_call,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps

};

