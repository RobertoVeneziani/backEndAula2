import {Router} from  'express';
import ClienteCtrl from '../Controle/clienteCtrl.js';
import ClienteCtrl from '../Controle/clienteCtrl.js';

const rotaCliente = new Router ();
const ClienteCtrl = new ClienteCtrl();

rotaCliente
.get()
.post()
.put()
.patch()
.delete();

export  default rotaCliente;