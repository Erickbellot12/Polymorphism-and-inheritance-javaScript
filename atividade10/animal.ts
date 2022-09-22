
 export class Animal {
    nome: string;
    idade: number;
    som: boolean;;
    correr: boolean;
    subir: boolean;
        constructor(nome: string, idade: number, som: boolean, correr: boolean, subir: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
    this.correr = correr;
    this.subir = subir;

  }
  mostrarAnimais(){
console.log(`seu nome é: ${this.nome}`)
console.log(`sua idade é: ${this.idade}`)
console.log(`esse animal emite som? ${this.som}`)
console.log(`esse animal corre? ${this.correr}`)
console.log(`esse sobe em arvores? ${this.subir}`)

  }
  
}
 

 
