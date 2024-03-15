export default class clienteCtrl{
    gravar(requsicao, resposta){
        if(requisicao.method === "POST" && requisicao.is('aplication/jason')){
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
                const cliente = new cliente(0, cpf, nome, endereco, bairro, cidade, estado, telefone);
            }
            else {
                resposta.status(400);
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do cliente, conforme documentação da API"
                });
    }
    atualizar(requsicao, resposta){

    }
    excluir(requisicao, resposta) {

    }
    consultar(requisicao, resposta){
    }
}

