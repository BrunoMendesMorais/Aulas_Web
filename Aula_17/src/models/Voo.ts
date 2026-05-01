import {Detalhes} from "./Detalhes"
import {Pacote} from "./pacote"

export class Voo{
    id_voo: string
    data_envio: Date
    detalhe: Detalhes
    pacotes: Pacote[]
    constructor(id_voo:string, data_envio:Date, detalhe:Detalhes, pacotes:Pacote[]){
        this.id_voo = id_voo
        this.data_envio = data_envio
        this.detalhe=detalhe
        this.pacotes = pacotes
    }
}