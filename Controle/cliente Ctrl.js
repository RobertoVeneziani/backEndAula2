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
            const codigo = requisicao.params.codigo;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const email = dados.email;
            if (codigo && codigo > 0 && cpf && nome && endereco && bairro && cidade && estado && telefone && email)
            {
                const  cliente = new Cliente(codigo, cpf, nome, endereco, bairro, cidade, estado, telefone, email);
                cliente.atualizar()
                .then(()=>{
                    resposta.status(200);
                    resposta.json({
                        "status": true,
                        "mensagem":"Cliente Atualizado com Sucesso!",
                    })
                })
                .catch((erro)=>{
                    resposta.status(500)        
                    resposta.json({     
                        "status":false,
                        "mensagem": "Não foi possivel atualizar cliente!" + erro.message
                    })
                });
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do cliente, conforme documentação da API"
                })  
            }

        }
        else{
            resposta.status(405); 
            resposta.json({
                status: false,
                mensagem: "Requisição inválida! Esperando o método PATCH, PUT e os dados no formato JSON para atualizar um cliente!"
            })
        }    
    }
    excluir(requisicao, resposta) {

    }
    consultar(requisicao, resposta){
    }

}
