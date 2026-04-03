import { Pedido } from "./Pedido";
import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco" ;
import { Sistema } from "./Sistema";

const endereco:Endereco = new Endereco("rua 11",1,"Tatui") 
const cliente:Cliente = new Cliente('Bruno',18,endereco)
const pedido1:Pedido = new Pedido(1,2,cliente)
const pedidos:Pedido[] = [pedido1]
const sistema:Sistema = new Sistema(pedidos)

console.log(sistema.ListPedido[0]?.cliente.nome)
console.log(sistema.ListPedido[0]?.cliente.endereco.cidade)
console.log(sistema.ListPedido[0]?.valor)
