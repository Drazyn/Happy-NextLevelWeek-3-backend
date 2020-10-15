import express from 'express';
import path from 'path';
import './database/connection';
import routes from './routes';
import 'express-async-errors';
import errorHandler from './erros/handler';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = Usu�rio
// M�todos HTTP = GET, POST, PUT, DELETE
    // GET = Buscar uma informa��o
    // POST = Criando uma informa��o nova
    // PUT = Editando uma informa��o
    // DELETE = Deletando uma informa��o

// Par�metros

app.listen(3333);
