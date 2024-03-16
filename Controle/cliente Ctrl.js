export default class clienteCtrl{
    gravar(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === "POST" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const email = dados.email;

        if (cpf && nome && endereco && bairro && cidade && estado && telefone && email){
            const cliente = new cliente(0, cpf, nome, endereco, bairro, cidade, estado, telefone)};
            cliente.gravar().then(()=>{
                resposta.status(201);
                resposta.json({
                    "status": true,
                    "mensagem":"Cliente gravado com sucesso!",
                    "codigo_cliente": cliente.codigo
                    });
            }).catch((erro) =>{
                resposta.status(500);
                resposta.json({
                    "status": false,
                    "mensagem": "Não foi possível armazenar o cliente!" + erro.message
                })
            });
        }
        else {
            resposta.status(400);
            resposta.json({
                "status": false,
                "mensagem": "Por favor, informe todos os dados do cliente, conforme documentação da API"
            });
        }
    } 
    else{
        resposta.status(405);
        resposta.json({
            "status": false,
            "mensagem": "Requisição inválida! Esperando o método  POST e dados no formato JSON para gravar um cliente!"
            }) 
        }
    }
    atualizar(requsicao, resposta){
        resposta.type('application/json');
        if((requsicao.method === "PATCH" || requisicao.method === "PUT") && requisicao.i('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const email = dados.email;
        }
    }
    excluir(requisicao, resposta) {

    }
    consultar(requisicao, resposta){
    }

}
