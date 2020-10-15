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
// Recurso = Usuário
// Métodos HTTP = GET, POST, PUT, DELETE
    // GET = Buscar uma informação
    // POST = Criando uma informação nova
    // PUT = Editando uma informação
    // DELETE = Deletando uma informação

// Parâmetros

app.listen(3333);
