/* "use client"
import { useContext } from 'react';
import { OrderContext, TableContext } from '@/context';
import { v4 as uuidv4 } from 'uuid';
import { FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { IconButtonView } from './IconButtonView'

interface Props {
  buttonName: string
}

const requestTrash = {
  color: "#fe0000"
}

export const IconButton = ({ buttonName }: Props) => {

  const { modalPlate, setModalPlate, cartTemporary, setCartTemporary } = useContext(OrderContext);

  const { idPeopleInTable, table } = useContext(TableContext)

  const handleClickRequest = () => {

    const ItemPeopleInTableID = uuidv4().replaceAll('/', 'a') 

    setCartTemporary(
      [{
        ItemPeopleInTableID,
        title: modalPlate.title,
        quantity: modalPlate.quantity,
        price: modalPlate.price,
        id_item: modalPlate.ItemID
      },
      ...cartTemporary])

    setModalPlate({
      ...modalPlate,
      modalType: 'required',
      stateOrder: 'temporary',
      headerModalRequest: "Solicitud Agregada."
    });

    
    console.log(modalPlate)

  };

  const handleEdit = () => {

    const cartTemporaryEdit = cartTemporary.filter((item, i) => {
      if (i === modalPlate.index) {
        item.quantity = modalPlate.quantity
      }
      return item
    })

    setCartTemporary(cartTemporaryEdit)

    setModalPlate({
      ...modalPlate,
      modalType: 'required',
      stateOrder: 'edit',
      headerModalRequest: "Solicitud Editada."
    });

  };

  const handleDelete = () => {

    const cartTemporaryDelete = cartTemporary.filter((item, index) => {
      return index !== modalPlate.index
    })

    setCartTemporary(cartTemporaryDelete)

    setModalPlate({
      ...modalPlate,
      modalType: 'required',
      stateOrder: 'delete',
      headerModalRequest: "Solicitud Eliminada."
    });

  };

  return (
    <>
      {buttonName === "Agregar" && <IconButtonView buttonName={buttonName} operation={handleClickRequest}><FaRegCheckCircle /></IconButtonView>}
      {buttonName === "Editar" && <IconButtonView buttonName={buttonName} operation={handleEdit}><FaRegCheckCircle /></IconButtonView>}
      {buttonName === "Eliminar" && <IconButtonView buttonName={buttonName} operation={handleDelete} styleButton={requestTrash}><FaTrashAlt /></IconButtonView>}
    </>
  )
}
 */