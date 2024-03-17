import Cliente from "./Modelo/Cliente.js";
import express from "express"
import roraCliente from "./Rotas/rotaCliente.js"
import rotaCliente from "./Rotas/rotaCliente.js";

const host = '0.0.0.0';
const porta = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cliente',rotaCliente);

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});