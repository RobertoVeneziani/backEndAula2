import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente {
  #codigo;
  #evento;
  #data;
  #local;
  #quantidadeIngresso;
  #preco;
  #cpf;
  #nome;
  #endereco;
  #bairro;
  #cidade;
  #estado;
  #telefone;
  #email;

  constructor(codigo=0, evento="", data="", local="", quantidadeIngresso="", preco="", cpf="", nome="", endereco="", bairro="", cidade="", estado="", telefone="", email=""){
    this.#codigo = codigo;
    this.evento = evento;
    this.data = data;
    this.local = local;
    this.quantidadeIngresso = quantidadeIngresso;
    this.preco= preco;
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

    get evento(){
        return this.#evento;
    }

    set evento(novoEvento){
        this.#evento = novoEvento;
    }

    
    get data(){
        return this.#data;
    }

    set data(novoData){
        this.#data = novoData;
    }
    get local(){
        return this.#local;
    }

    set local(novoLocal){
        this.#local = novoLocal;
    }

    get quantidadeIngresso(){
        return this.#quantidadeIngresso;
    }

    set quantidadeIngresso(novoQuantidadeIngresso){
        this.#quantidadeIngresso = novoQuantidadeIngresso;
    }

    get preco(){
        return this.#preco;
    }

    set preco(novoPreco){
        this.#preco = novoPreco;
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

    set cidade(novaCidade){
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

    async excluir(){
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return `Cliente código: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return{
            "codigo": this.#codigo,
            "evento": this.#evento,
            "data": this.#data,
            "local": this.#local,
            "quantidadeIngresso": this.#quantidadeIngresso,
            "preco":this.#preco,
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
