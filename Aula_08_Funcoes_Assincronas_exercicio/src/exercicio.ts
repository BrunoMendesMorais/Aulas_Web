type Tarefa = {
    descricao:string
    prioridade:number
    concluida:boolean
}
const tarefas:Tarefa[] = [
    {descricao:"Fazerrelatório",prioridade:2,concluida:false} ,
    {descricao:"Enviare-mail",prioridade:3,concluida:false} ,
    {descricao:"Reuniãocomequipe",prioridade:1,concluida:false}
];

function imprimirTarefa(descricao:string,indice:number,totalTarefas:number ) : void {
    console.log(`Tarefaconcluída:${descricao}`);
    console.log(`Progresso:${indice+1}/${totalTarefas}`);
}

function ExecutarTarefa(tarefas:Tarefa[], callback:(descricao:string,indice:number,ttotalTarefas:number)=>void, timer:number = 1000){
    tarefas.sort((a,b)=>b.prioridade - a.prioridade)
    let contador = 0;

    const interval = setInterval(() => {
      if(contador >= tarefas.length || tarefas[contador]?.descricao === "cancelar"){
        clearInterval(interval)
        return
      }
      const tarefa = tarefas[contador]
      if(tarefa){
        tarefa.concluida = true;
        callback(tarefa.descricao,contador, tarefas.length)
        contador ++
      }
    }, timer);
}


ExecutarTarefa(tarefas,imprimirTarefa,1500);