import Cliente from "../Modelo/Cliente.js";

export default class ClienteCtrl {
    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === "POST" && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const evento = dados.evento;
            const data = dados.data;
            const local = dados.local;
            const quantidadeIngresso = dados.quantidadeIngresso;
            const preco = dados.preco;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const email = dados.email;

            if (evento && data && local && quantidadeIngresso && preco && cpf && nome && endereco && bairro && cidade && estado && telefone && email) {
                const cliente = new Cliente(0, evento, data, local, quantidadeIngresso, preco, cpf, nome, endereco, bairro, cidade, estado, telefone, email);
                cliente.gravar().then(() => {
                    resposta.status(201);
                    resposta.json({
                        "status": true,
                        "mensagem": "Cliente gravado com sucesso!",
                        "codigo_cliente": cliente.codigo
                    });
                }).catch((erro) => {
                    resposta.status(500);
                    resposta.json({
                        "status": false,
                        "mensagem": "Não foi possível armazenar o cliente!" + erro.message
                    });
                });
            } else {
                resposta.status(400);
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do cliente, conforme documentação da API"
                });
            }
        } else {
            resposta.status(405);
            resposta.json({
                "status": false,
                "mensagem": "Requisição inválida! Esperando o método POST e dados no formato JSON para gravar um cliente!"
            });
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');
        if ((requisicao.method === "PATCH" || requisicao.method === "PUT") && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const codigo = requisicao.params.codigo;
            const evento = dados.evento;
            const data = dados.data;
            const local = dados.local;
            const quantidadeIngresso = dados.quantidadeIngresso;
            const preco = dados.preco;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const email = dados.email;
            if (codigo && codigo > 0 && evento && data && local && quantidadeIngresso && preco &&cpf && nome && endereco && bairro && cidade && estado && telefone && email) {
                const cliente = new Cliente(codigo, evento, data, local, quantidadeIngresso, preco, cpf, nome, endereco, bairro, cidade, estado, telefone, email);
                cliente.atualizar()
                    .then(() => {
                        resposta.status(200);
                        resposta.json({
                            "status": true,
                            "mensagem": "Cliente Atualizado com Sucesso!",
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500);
                        resposta.json({
                            "status": false,
                            "mensagem": "Não foi possível atualizar cliente!" + erro.message
                        });
                    });
            } else {
                resposta.status(400);
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do cliente, conforme documentação da API"
                });
            }

        } else {
            resposta.status(405);
            resposta.json({
                "status": false,
                "mensagem": "Requisição inválida! Esperando o método PATCH, PUT e os dados no formato JSON para atualizar um cliente!"
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === "DELETE") {
            const codigo = requisicao.params.codigo;
            if (codigo && codigo > 0) {
                const cliente = new Cliente(codigo);
                cliente.excluir()
                    .then(() => {
                        resposta.status(200);
                        resposta.json({
                            "status": true,
                            "mensagem": "Cliente excluido com sucesso!",
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500);
                        resposta.json({
                            "status": false,
                            "mensagem": "Não foi possível excluir o cliente!" + erro.message
                        });
                    });
            } else {
                resposta.status(400);
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe o codigo do cliente que deseja excluir, conforme documentação da API"
                });
            }
        } else {
            resposta.status(405);
            resposta.json({
                "status": false,
                "mensagem": "Requisição inválida! Esperando o método DELETE para excluir um cliente!"
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === "GET") {
            //const termoDePesquisa = requisicao.params.termo;
            const cliente = new Cliente(0);
            cliente.consultar()
                .then((clientes) => {
                    resposta.status(200);
                    resposta.json(clientes);
                })
                .catch((erro) => {
                    resposta.status(500);
                    resposta.json({
                        "status": false,
                        "mensagem": "Não foi possível consultar o cliente!" + erro.message
                    });
                });
        } else {
            resposta.status(405);
            resposta.json({
                "status": false,
                "mensagem": "Requisição Inválida! Esperando o método GET para consultar os clientes."
            });
        }
    }
}

