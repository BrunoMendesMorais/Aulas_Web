const numeros = [1,2,3,4,5,6,7,8,8,2,4]

const semDuplicados = numeros.filter((valor, indice, self)=>{
    return self.indexOf(valor) === indice
})

let pares = numeros.filter(n=>n%2===0)

let maiorQueTres = numeros.filter(n=>n>3)

let valores = [10,null,25,undefined,58]

let valoresNaoNulos = valores.filter(v=>v !== null && v !== undefined)

type Pessoa = {
    nome:string
    idade:number
}

const pessoas: Pessoa[] = [
    {nome:'Ferdinando',idade:30},
    {nome:'João',idade:14},
    {nome:'Carlos',idade:20},
    {nome:'Anisio',idade:18}
]

let maioresIdade= pessoas.filter(pessoa => pessoa.idade >= 18)
