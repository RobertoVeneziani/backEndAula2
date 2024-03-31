import Cliente from "./Modelo/Cliente.js";
import express from "express"
import rotaCliente from "./Rotas/rotaCliente.js";
import cors  from 'cors';

const host = '0.0.0.0';
const porta = 3000;
const app = express();
app.use(cors({
    origin: '*'
    }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cliente',rotaCliente);

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});