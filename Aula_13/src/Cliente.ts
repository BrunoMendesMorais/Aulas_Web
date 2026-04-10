import { Endereco } from "./Endereco" ;

export class DateUtils{
    constructor(nome:string,idade:number,endereco:Endereco){
    }
    formatarData(data:Date,formato:string):string{
        const dia = data.getDay
        const ano = data.getMonth
        const mes = data.getFullYear
        return 
    diferencialEmDias(data1:Date,data2:Date):number{
        return 1
    }
    adicionarDias(data:Date, dias:Date):Date{
        return data
    }
    ehFinaldeSemana(data:Date):boolean{
        return false
    }
    converterParaISO(data:Date):string{
        return "a"
    }
}