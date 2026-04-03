import { Pedido } from "./Pedido";
export class Sistema{
    ListPedido:Pedido[]
    
    constructor(ListPedido:Pedido[]){
        this.ListPedido = ListPedido
    }
}