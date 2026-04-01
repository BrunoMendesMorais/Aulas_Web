class Prontuario{
    paciente:Paciente
    medico:Medico

    constructor(paciente:Paciente,medico:Medico){
        this.paciente = paciente
        this.medico = medico
    }

    lerProntuario(){
        console.log(`Médico: ${this.medico.pessoa.nome} \n Paciente: ${this.paciente.pessoa.nome}`)
        this.paciente.remedios.forEach(remedio => {
            console.log(`Remedio:${remedio}`)
        });
    }
}
