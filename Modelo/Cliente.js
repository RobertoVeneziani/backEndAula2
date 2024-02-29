import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente {
  #codigo;
  #cpf;
  #nome;
  #endereco;
  #bairro;
  #cidade;
  #estado;
  #telefone;
  #email;

  constructor(codigo=0, cpf="", nome="", endereco="", bairro="", cidade="", estado="", telefone="", email=""){
    this.#codigo = codigo;
    this.cpf = cpf;
    this.nome = nome;
    this.endereco = endereco;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.telefone = telefone;
    this.email = email;
    }
    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome =  novoNome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco =  novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set vidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get estado(){
        return this.#estado
    }

    set estado(novoEstado){
        this.#estado = novoEstado;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this .#telefone = novoTelefone;
    }

    get email(){
        return  this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    async gravar(){
        const dao = new ClienteDAO();
        await dao.gravar(this);
    }

    async atualizar(){
        const dao = new ClienteDAO();
        await dao.atualizar(this);
    }

    excluir(){
        const dao = new ClienteDAO();
        dao.excluir(this);
    }

    async consultar(ternoDePesquisa){
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return `Cliente código: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return{
            "codigo": this.#codigo,
            "cpf": this.#cpf,
            "nome": this.#nome,
            "endereco": this.#endereco,        
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "estado": this.#estado,
            "telefone": this.#telefone, 
            "email": this.#email


        }
    }
}
