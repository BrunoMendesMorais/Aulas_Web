const frutas:string[]=['Maca','Banana','Uva'];
const numeros: number[] = [1,2,3,5,6,7,8,9];
type Produto ={id:number,nome:string,preco:number}

const produto: Produto[] = [
    {id:1,nome:'Mouse',preco:50} ,
    {id:2,nome:'Teclado',preco:150}
]
frutas.forEach((item,index)=>{
    console.log(`${index} : ${item}`)
})

let contador: number = 0;

numeros.forEach(item=>{
    contador += item;
})

produto.forEach(p=>{
    p.nome=p.nome+'qualquercoisa'
})

