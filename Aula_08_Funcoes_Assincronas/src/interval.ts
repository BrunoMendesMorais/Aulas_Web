let contador:number = 0;

const interval = setInterval(()=>{
    contador ++
    console.log(contador)
    if(contador === 4){
        console.log("Intervalor Cancelado")
        clearInterval(interval)
    }
},700)

console.log("Depois do intervalo")