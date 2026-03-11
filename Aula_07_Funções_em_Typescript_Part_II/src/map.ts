 const numeros: number[] = [1,2,3,5,6,7,8,9]
 const dobro:number[] = numeros.map(n=> n*2)
 const strings:string[] = numeros.map(n=>`Numero ${n}`)

type Produto ={id:number,nome:string,preco:number}

const produto: Produto[] = [
    {id:1,nome:'Mouse',preco:50} ,
    {id:2,nome:'Teclado',preco:150}
]

const nomes:string[] = produto.map(p=> p.nome)

const listaFormatada = produto.map(p=>({
    id: p.id, 
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel:true
}))
