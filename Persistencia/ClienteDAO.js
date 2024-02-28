import conectar from "./Conexao.js";
import Cliente from "../Modelos/Cleinte.js"
//DAO - data Access Object
export default class ClienteDAO {
    async gravar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `INSERT INTO cliente (cpf, nome, endereco, bairro, cidade, estado, telefone, email)
            values (?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                cliente.cpf, 
                cliente.nome, 
                cliente.endereco,
                cliente.bairro,
                cliente.cidade,
                cliente.estado,
                cliente.telefone,
                cliente.email
            ];
            const [resultados, campos] = await conexao.execute(sql, parametros);
            cliente.codigo = resultados.insertId;
        }
    }
   

    async atualizar(cliente) {
        if  (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `UPDATE cliente SET cpf = ?, nome = ? endereco = ?, bairro = ?, cidade = ?,   estado = ? tefefone = ? email = ?, WHERE codigo = ?`;
            const parametros = [
                cliente.cpf,
                cliente.nome,
                cliente.endereco,
                cliente.bairro,
                cliente.cidade,
                cliente.estado,
                cliente.telefone,
                cliente.email,
                cliente.codigo
            ];

            await conexao.execute(sql, parametros);
        }
    }
    
    async excluir(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();   
            const sql = "DELETE FROM cliente, WHERE codigo=?";
            const parametros = [
                cliente.codigo
            ]
            await conexao.execute(sql,parametros);
        }
    }

    async consultar(termoDePesquisa){
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(termoDePesquisa)){
            sql = `SELECT * FROM cliente WHERE nome LIKE '%$%'`;  
        }
        else{
            sql=`SELECT * FROM cliente WHERE codigo = ?`;
        }

        const conexao = await conectar(); 
        const [registros] = await conexao.execute(sql, [termoDePesquisa]);
    }
}