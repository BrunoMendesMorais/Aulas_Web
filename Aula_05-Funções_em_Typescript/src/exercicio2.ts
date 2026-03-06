function meiaPiramide(n:number):void{
    for(let i:number = 1; i<=n; i++){
        let linha:string = ''
        for(let b:number = 1; b<=n; b++){
            linha = linha + (b<=i?'1 ': ' ')
        }
        console.log(linha)
    }
}
function Piramide(n:number):void{
    for(let i:number = 1; i<=n; i++){
        let linha:string = ''
        for(let b:number = 1; b<=n*2-1; b++){
            linha = linha + '1 '
        }
        console.log(linha)
    }
}
Piramide(4)