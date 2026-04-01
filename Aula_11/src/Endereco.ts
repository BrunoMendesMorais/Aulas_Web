class Endereco {
    rua: string
    numero: number
    cidade: string
    cep: string

    constructor(rua:string,numero:number,cidade:string,cep:string){
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.cep = cep
    }
}

class Contato{
    telefone: string
    email :string

    constructor(telefone:string,email:string){
    this.telefone = telefone
    this.email = email
    }
}

class Pessoa{
    nome:string
    idade:number
    endereco:Endereco
    contato:Contato

    constructor(nome:string,idade:number,endereco:Endereco,contato:Contato){
        this.nome = nome
        this.idade = idade
        this.endereco = endereco
        this.contato = contato
    }
}

class Remedio{
    nome: string
    dosagem :string

    constructor(nome:string,dosagem:string){
    this.nome = nome
    this.dosagem = dosagem
    }
}

class Paciente{
    pessoa:Pessoa
    remedios:Remedio[]

    constructor(pessoa:Pessoa,remedios:Remedio[]){
        this.pessoa = pessoa
        this.remedios = remedios
    }
}

class Medico{
    pessoa:Pessoa
    especialidade:string

    constructor(pessoa:Pessoa,especialidade:string){
        this.pessoa = pessoa
        this.especialidade = especialidade
    }
}

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
