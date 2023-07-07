import { PlateSelected } from "@/interfaces"
import { OrderPlateConfirmedView } from "./OrderPlateConfirmedView"

const delivered = {
  color: "#ff9747",
	fontWeight: "bold"
}

const process = {
  color: "hsl(135, 70%, 51%)"
}

interface Props {
  cartProduct: PlateSelected
}

export const OrderPlateConfirmed = ({cartProduct}: Props) => {
  return (
    <OrderPlateConfirmedView cartProduct={cartProduct} 
    state={cartProduct.state === 'delivered' ? {title: "Entregado", style: delivered} : {title: "Su pedido se está preparando", style: process} } />
  )
}


