//Exercicio 1
function maiuscula(palavra:string):string{
    return  palavra.toUpperCase()
}
let maiusculaLambda = (palavra:string)=>(palavra.toUpperCase)

//Exercicio 2
let elevar =(numero:number,expoente:number)=>(numero**expoente)

//Exercicio 3
const numerais:number[] = [1,2,3,4,5,6,7,8,9,10]
let numeraisDobro:number[] = []

function dobrarNumeros(numeros:number[]){
    for(let n of numeros){
        numeraisDobro.push(n.valueOf()*2)
    }
}
dobrarNumeros(numerais)

for(let n of numeraisDobro){
    console.log(n)
}

//Exercicio 4

type Funcionario = {
    nome: string
    cargo: string
}

const fucionarios:Funcionario[] = [
    {nome: "Marcos", cargo: "Desenvolvedor"},
    {nome:"Fernanda",cargo:"Gerente"},
    {nome:"Carlos",cargo:"Desenvolvedor"},
    {nome:"Joana",cargo:"Analista"}
]

const cargoDesejado : string = "Desenvolvedor";

let cargosFiltrado:Funcionario[] = fucionarios.filter(fucionarios => fucionarios.cargo === cargoDesejado)

//Exercicio 5

type Aluno = {
    nome:string
    nota:number
}

const alunos: Aluno[] = [
    {nome: "Alicce", nota: 8},
    {nome: "Bruno", nota: 5},
    {nome: "Carla", nota: 7},
    {nome: "Daniel", nota: 6}
]

let Aprovados:Aluno[] = alunos.filter(alunos => alunos.nota <= 7)

// Exercicio 6
type Evento ={
    nome: string
    mes: string
}

const eventos:Evento[] = [
    {nome:"Workshop TypeScrip", mes: "Janeiro"},
    {nome:"Hackathon", mes: "Março"},
    {nome:"Conferência de IA", mes: "Janeiro"}
]
const mesDesejado: string = "Janeiro"

let mesFiltrado:Evento[] = eventos.filter(eventos => eventos.mes === mesDesejado)
