import Cliente from "./Modelo/Cliente.js";

//
const cliente = new Cliente(5, "154.222.356-25",
    "Ramones", "Rua das Larangeiras, 700",
    "Porto Madero", "São Paulo", "SP", "(11)92556-2235",
    "ramones@ig.com.br");

cliente.gravar().then(() =>{
    console.log("cliente gravado com sucesso!");
}).catch((erro) =>{
    console.log(erro.message);  
});
/*npm start

cliente.atualizar().then(() =>{
    console.log("Dados do cliente atualizados com sucesso!");
}).catch((erro) =>{
    console.log(erro);
});

cliente.excluir().then(()=> {
    console.log("O cliente foi excluído com sucesso!")
})
.catch((erro)=> {
    console.log(erro);
});


const clienteQQ = new Cliente();

*/
clienteQQ.consultar("Maria").then((listaClientes) => {
    console.log("Clientes encontrados:")
    for (const cliente  of listaClientes){
        console.log(cliente.toJSON());
    }
    listaClientes = lista;
}).catch((erro) =>{
    console.log("Não foi possível consultar o cliente", erro);
});

