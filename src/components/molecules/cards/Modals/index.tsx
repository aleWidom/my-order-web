'use client'
import { ModalInfo, ModalPlateRequired } from "@/components/molecules"
import { useOrdersStore, useSearchStore } from "@/store"




export const Modals = () => {


    const request = useOrdersStore(state => state.request)

    const modalInfo = useSearchStore(state => state.modalInfo)

    return (
        <>
            {request && <ModalPlateRequired request={request} />}
            {modalInfo.state === true && <ModalInfo modalInfo={modalInfo} />}
        </>
    )
}

