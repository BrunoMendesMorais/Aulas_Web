function mensagem(f:string):string{
    return f;
}

function soma(a:number, b:number){
    console.log (a+b);
}

function saudacao(nome:string, a:string = "visitante"):string{
    return `olá ${a}`
}

function multiplicar(a:number, b:number){
    return a * b 
}

const mensagemLambda=(f:string):string => f;

const somaLambda=(a:number, b:number):void => console.log (a+b) 

const saudacaoLanbda=(nome:string, x:string ):string => 'a'

const multiplicarOpcional =(a:number,b?:number):number =>{
    if(b === undefined){
        return a;
    }
    return a * b;
} 

//Operador Ternario
const multiplicarOperadorTernario=(a:number, b?:number):number=>b === undefined ? a : a*b

//Operador de Conlescência Nula
const multiplicarCoalescencia=(a:number,b?:number):number => a*(b??1)

