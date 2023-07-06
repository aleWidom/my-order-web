"use client"
import {  useContext } from "react";
import { OrderContext } from "../../../../context";
import { MenuPlateView } from "./MenuPlateView";


interface Props {
  id: string;
  price: string;
  description: string;
  header: string;
}

export const MenuPlate = ({price, description, header, id}: Props) => {
  
  const {setModalPlate } = useContext(OrderContext);

  const handleClickRequest = () => {
    setModalPlate({
      ItemID: id,
      stateModal: true,
      title: header,
      price: price,
      description: description,
      modalType: 'main',
      quantity: 1
    });
  };

  return (
   <MenuPlateView handleClickRequest={handleClickRequest} price={price} header={header} 
    description={description.length > 40 ? description.slice(0, 42) + "..." : description}/>
  );
};
