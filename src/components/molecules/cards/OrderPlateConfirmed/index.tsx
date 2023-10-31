import { PlateSelected } from "@/interfaces"
import { OrderPlateConfirmedView } from "./OrderPlateConfirmedView"


const process = {
  color: "hsl(135, 70%, 51%)"
}

interface Props {
  cartProduct: PlateSelected
}

export const OrderPlateConfirmed = ({cartProduct}: Props) => {
  return (
    <OrderPlateConfirmedView cartProduct={cartProduct} 
    state={{title: "Su pedido se ha solicitado correctamente.", style: process} } />
  )
}


