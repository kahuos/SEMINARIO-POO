class perfume {
    constructor(nome) {
        this.nome = nome
    }
    perfumaria(perfume) {
        if (typeof perfume == "string") {
            this.perfumaria = perfume
        }
    }
    //Get serve para retornar valor do x
    get perfumaria() {
        return this._perfumaria
    }
    //Set serve para passar um valor para um atributo privado da classe no qual voce nao tem acesso
    set perfume(x) {
        if (typeof x == "string") {
            this._perfumaria = x
        }
    }
    PERF() {//sobrescrita de função
        alert(`${this.nome} ESSA E A  REDES DE PERFUMES`) 
    }
    PERF1(reformulaçao) {//Na inseção de um parametro na função 'sobrescristiva' é possivel alterar o resultado
        if (reformulaçao = reformulaçao) {
            alert(`${this.nome} BEM VINDO AO GRAU FRAGANCE!!`)
        }else {
            this.PERF()
    }
    }
}
let p1 = new perfume("PESSOAS"); //Criar objetos
let reformulaçao = "Grau Finance foi atualizado"
p1.PERF()
p1.PERF1()
p1.PERF1(reformulaçao) //Parte do subscrever função

class tipos extends perfume {
    constructor(tipo) {
        super(nome);
        this.tipo = tipo;

    }

}
class distribuidora extends perfume {
    constructor(tipo) {
        super(nome);
        this.tipo = tipo;

    }

}
class importado extends perfume {
    constructor(tipo) {
        super(nome);
        this.nacional = tipo;

    }

}
class marcas extends perfume {
    constructor(tipo) {
        super(nome);
        this.marcas = tipo;

    }

}
try { //Responsável pela tentativa de criar um erro
    throw new Error("Isto é um erro do GRAU FRAGANCE!!") //Throw é responsavel pela geração do erro
} catch (error) {//Catch captura o erro lançado anteriormente
    console.error(error.message)//Evocando o retorno de erro do console e a mensagem do erro
}

let p2 = new perfume("Marco Paul"); //Criar objetos
let p3 = new perfume("Luana Goth");
let p4 = new perfume("Mia Goth");
let p5 = new perfume("Aiura Sak");
let p6 = new perfume("Julia Carvalho");
let p7 = new perfume("Luan Lima");



p2._perfume = "Black Orchid" //Atribuição de propriedades.
p2.tipo = "Achocolatado"
p2.marcas = "Tom ford"
p2.distribuidora = "Antonio Puigh"
p2.importado = "França"

p3._perfume = "Acqua di gio"
p3.tipo = "Cítrico"
p3.marcas = "Armani"
p3.distribuidora = "Antonio Puigh"
p3.importado = "Italia"

p4._perfume = "Dior homme intense"
p4.tipo = "Atalcado"
p4.marcas = "Dior"
p4.distribuidora = "Grupo LV"
p4.importado = "França"

p5._perfume = "Sauvage Elixir"
p5.tipo = "Amadeirado"
p5.marcas = "Dior"
p5.distribuidora = "Grupo LV"
p5.importado = "França"

p6._perfume = "Y EDP"
p6.tipo = "Frutado"
p6.marcas = "Yves Saint Laurent"
p6.distribuidora = "Grupo L'óreal"
p6.importado = "França"

p7._perfume = "Versace pour homme"
p7.tipo = "Aquatico"
p7.marcas = "Versace"
p7.distribuidora = "Antonio Puigh"
p7.importado = "Italia"



console.log(`${p2.nome} tem um ${p2._perfume} do tipo ${p2.tipo} ,da marca ${p2.marcas}, da distribuidora ${p2.distribuidora} e importado da ${p2.importado}`)
console.log(`${p3.nome} tem um ${p3._perfume} do tipo ${p3.tipo} ,da marca ${p3.marcas}, da distribuidora ${p3.distribuidora} e importado da ${p3.importado}`)
console.log(`${p4.nome} tem um ${p4._perfume} do tipo ${p4.tipo} ,da marca ${p4.marcas}, da distribuidora ${p4.distribuidora} e importado da ${p4.importado}`)
console.log(`${p5.nome} tem um ${p5._perfume} do tipo ${p5.tipo} ,da marca ${p5.marcas}, da distribuidora ${p5.distribuidora} e importado da ${p5.importado}`)
console.log(`${p6.nome} tem um ${p6._perfume} do tipo ${p6.tipo} ,da marca ${p6.marcas}, da distribuidora ${p6.distribuidora} e importado da ${p6.importado}`)
console.log(`${p7.nome} tem um ${p7._perfume} do tipo ${p7.tipo} ,da marca ${p7.marcas}, da distribuidora ${p7.distribuidora} e importado da ${p7.importado}`)