import {Router} from  'express';
import ClienteCtrl from '../Controle/clienteCtrl.js';
import ClienteCtrl from '../Controle/clienteCtrl.js';

const rotaCliente = new Router ();
const ClienteCtrl = new ClienteCtrl();

rotaCliente
.get('/:termo', cliCtrl.consultar)
.post('/', cliCtrl.gravar)
.put('/:codigo', cliCtrl.atualizar)
.patch('/:codigo', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);

export  default rotaCliente;