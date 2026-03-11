const numeros: number[] = [1,12,3,624,6,10,8,9]

numeros.sort((a,b)=> a-b)

console.log(numeros);

const arquivos:string[] = ["item10.png","item01.png","item12.png","item14.png","item-1.png","item25.png"]

arquivos.sort((a,b)=>a.localeCompare(b))
console.log(arquivos);

"anisio".localeCompare("ANISIO",undefined,{sensitivity:'base'})
"teste".toLocaleLowerCase().localeCompare("TESTE".toLocaleLowerCase())