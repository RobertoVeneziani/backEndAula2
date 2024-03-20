import {Router} from  'express';
import ClienteCtrl from '../Controle/clienteCtrl.js';


const rotaCliente = new Router ();
const cliCtrl = new ClienteCtrl();

rotaCliente
.get( '/', cliCtrl.consultar)
.get('/:termo', cliCtrl.consultar)
.post('/', cliCtrl.gravar)
.put('/:codigo', cliCtrl.atualizar)
.patch('/:codigo', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);

export  default rotaCliente;