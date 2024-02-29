import Cliente from "./Modelo/Cliente.js";


const cliente = new Cliente(0, "123.456.789-10",
    "Jose Alcantara de Moraes", "Rua das Larangeiras, 213",
    "Vila ocidental", "São Paulo", "SP", "(11)92556-2235",
    "josealcantara@ig.com.br");

cliente.gravar().then(() =>{
    console.log("cliente gravado com sucesso!");
}).catch((erro) =>{
    console.log(erro.message);  
});

