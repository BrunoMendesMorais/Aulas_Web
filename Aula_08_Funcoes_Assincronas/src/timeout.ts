console.log("antes do set timeout");
let frase:string = "Rodando time out"
const timeout = setTimeout(()=>console.log(frase),3000); //não sincrono

frase = "rodando o cleartimeout"

if(frase !== "Rodando time out"){
    clearTimeout(timeout);
    console.log(frase);
}

console.log("depois do time")




